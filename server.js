const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", (socket) => {
    console.log("New Client is Connected!");

    socket.emit("welcome", "Hello and Welcome to the Server");

});

http.listen(port, () => {
    console.log("Server Is Running Port: " + port);
});
