const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const db = require("../config/keys.js").MONGO_URI;
const expressGraphQL = require("express-graphql");
const path = require('path');

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// };

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(cors());

app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL(req => {
    return {
      schema,
      context: {
        token: req.headers.authorization
      },
      graphiql: true
    };
  })
);

module.exports = app;
