const io = require("socket.io-client");

// --------------------------------------------------//

//games section of chat 
let games = io("http://localhost:3000/games");
//recieving games sections
games.on("welcome", (data) => {
   console.log("Message: ", data);
});

games.emit("joinRoom", "pubg");
games.on("success" , (res) => {console.log(res);})
games.on("err" , (res) => {console.log(res);})
games.on("newUser" , (res) => {console.log(res);})
// --------------------------------------------------//


// //sports section of chat
// let sports = io("http://localhost:3000/sports");
// //recieving sports data
// sports.on("welcome", (data) => {
//    console.log("Message: ", data);
// });
// //sending sports data
// sports.emit("cricket" , "Recieved");
