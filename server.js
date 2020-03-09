



// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });ls


//********************************************************* */
//variable, constants
const mongoose = require("mongoose");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
// const BattleshipGame = require('./BattleshipGame.js');
const app = express();
const port = process.env.PORT || 3000;
const clientPath = './client/';
const server = http.createServer(app);
const io = socketio(server);

// const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");


//********************************************************* */
//Server start

console.log('Serving static from ${clientPath}');

app.use(express.static(clientPath));

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Minimum socket working connectionn
io.on('connection', (socket) => {
    new Btl(waitingPlayer, socket);
    console.log('A player connected');
    console.log((new Date().toISOString()) + ' ID ' + socket.id + ' connected.');
    socket.emit('message', 'You are connected ');
})
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let waitingPlayer = null;

// io.on('connection', (socket) => {
//     // console.log('beep');
//     if (waitingPlayer) {
//         // console.log('beep beep');
//         new BattleshipGame(waitingPlayer, socket);
//         waitingPlayer = null;
//     } else {
//         waitingPlayer = socket;
//         waitingPlayer.emit('message', 'Waiting for an opponent');
//     }


//     socket.on('message', (text) => {
//         io.emit('message', text);
//     });
// });


server.on("error", (err) => {
    console.error("Server error:", err);
});

server.listen(port, () => {
    console.log("Battleship Game started on port:" + port);
});

//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
//Server issue 1:
//connect to Battleship.db
//initialize it
//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//

//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
//Server issue 2:
//listen for Player name
//listen for Oponent name
//add to database
//      log moves and grids for replay, persistence
//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//



// console.log(clientPath);