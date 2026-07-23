import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

const allowedOrigins = process.env.FRONTEND_URL || "http://localhost:5173";

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
  },
});

function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

//Online users map = {userId: socketId}
const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) userSocketMap[userId] = socket.id;

  //io.emit() send events to everyone - broadcast
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //socket.on is used to listen for events from the client
  socket.on("disconnect", () => {
    if (userId) delete userSocketMap[userId];

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, server, getReceiverSocketId, app };
