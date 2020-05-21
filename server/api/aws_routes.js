const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const { IAM_USER_KEY, IAM_USER_SECRET, BUCKET_NAME } = require("../../config/aws_keys");
const multer = require('multer');
const multerS3 = require("multer-s3");



// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'resume-app-images',
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })

// const getObjects = function (req, res) {
//   const params = { Bucket: 'resume-app-images', Key: "talent-spring-logo.jpg" };
//   s3.getObject(params, function (err, data) {
//     if (err) {
//       res.send({ "error": err });
//     }
//     res.send({ data });
//   });
// }

router.get('/get', (req, res) => {
  const s3 = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME,
    Region: "us-east-2",
  });
  s3.getObject({ Bucket: 'resume-app-images', 
    Key: "talent-spring-logo.jpg" }, 
    function (err, data) {
    if (err) {
      console.log(err);
      res.send({ "error": err });
    }
    console.log(data);
    res.send({ data });
  });
})

module.exports = router;