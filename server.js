// server.js
var express = require("express");
var path = require("path");
var expressStaticGzip = require("express-static-gzip");
app = express();

app.use(expressStaticGzip(__dirname + "/dist"));

// app.use(serveStatic(__dirname + "/dist"));

app.use("/public", express.static(path.join(__dirname, "/dist/images")));

app.get("*", function (req, res) {
	res.sendFile("index.html", { root: path.join(__dirname, "/dist") });
});

var port = process.env.PORT || 5000;
var hostname = "192.168.0.104";
app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
