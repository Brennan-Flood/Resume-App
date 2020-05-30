const app = require("./server/server");
const fs = require('fs');
const AWS = require("aws-sdk");
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const { BUCKET_NAME, IAM_USER_KEY, IAM_USER_SECRET } = require("./config/aws_keys");

AWS.config.update({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: BUCKET_NAME,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

// Define POST route
app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) throw new Error(error);
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);
      return response.status(200).send(data);
    } catch (error) {
      console.log(error);
      return response.status(400).send(error);
    }
  });
});

// <? xml version = "1.0" encoding = "UTF-8" ?>
//   <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
//     <CORSRule>
//       <AllowedOrigin>*</AllowedOrigin>
//       <AllowedMethod>GET</AllowedMethod>
//       <AllowedMethod>POST</AllowedMethod>
//       <AllowedMethod>PUT</AllowedMethod>
//       <MaxAgeSeconds>3000</MaxAgeSeconds>
//       <AllowedHeader>Authorization</AllowedHeader>
//     </CORSRule>
//   </CORSConfiguration>
console.log(process.env.NODE_ENV)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
