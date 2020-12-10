const express = require("express");
const app = express();
// const http = require("http");
// const app = http.createServer();
// const path = require("path");
const PORT = process.env.PORT || 8080;
// const morgan = require("morgan");
// server.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
// app.use(express.static("index.html"));
app.get("/", (req, res) => res.send("./index.html"));
app.listen(PORT, function () {
	console.log("Server started!");
});
