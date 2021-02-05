const express = require("express");
const app = express();
const path = require("path");
// const PORT = process.env.PORT || 8000;

//Heroku Step 4
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port, () => {
  console.log(`Portfolio Website started on Port ${port}`);
});

app.use(express.static("public"));
// app.get("/*", (req, res) => res.send(path("./public/index.html")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// app.listen(PORT, function () {
// 	console.log("Server started!");
// });
