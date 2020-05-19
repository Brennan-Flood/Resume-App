const app = require("./server/server");
// const express = require("express");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.get("/", (req, res) => {
//   app.use(express.static('client'));
// })