const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer();
const io = require("socket.io")(http);

let gamerooms = ['pubg' , 'csgo' , 'coc'];

//basic localhost connection from server
io.on("connection", (socket) => {
    console.log("New Client is Connected!");
    socket.emit("welcome", "Hello and Welcome to the Server");
});

//games secttion sending 
io.of("/games").on("connection" , (socket) => {
    socket.emit("welcome" , "Hello and welcome to the games area");
    socket.on("joinRoom" , (room) => {
        
        if(gamerooms.includes(room)){
            socket.join(room);
            //specific room joining 
            io.of("/games").in(room).emit("newUser" , "New player has joined in room " , room);
            return socket.emit("success" , "you have succesgully joined room" + room);
        }
        else{
            return socket.emit("err", "Error no room named"  + room);
        }
    });
    socket.disconnect();

});

// //sports section sending(emit) and recieving(on)
// io.of("/sports").on("connection" , (socket) => {
//     socket.emit("welcome" , "Hello and welcome to the sports area");
//     socket.on("cricket", (data) => {
//         console.log("Yes ", data);
//      });
// });

http.listen(port, () => {
    console.log("Server Is Running Port: " + port);
});
