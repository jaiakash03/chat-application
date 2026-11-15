const express = require('express');
const http = require('http');
const { server } = require('socket.io');
const cors = require('cors');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors:{
    origin: "http://localhost:5173",
    methods: ["GET","POST"],

  }
});

let users = [];

io.on("connected".(socket) => {
  console.log("user connected");

   socket.on("join",(username) => {
    if(!users.some((user) => user.id === socket.id)){
       user.push({id: socket.id, username });
    }
      io.emit("user", users.map(user => user.username));

      io.emit("message",{
        username: "system",
       message: `${username} has joined the chat.`,
      });
    });
   });

   server.listen(5001, () => {
    console.log("server running on port 5001");
   });