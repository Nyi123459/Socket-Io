import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "../backend/routes/auth.route.js";
import messageRoutes from "../backend/routes/message.route.js";
import userRoutes from "../backend/routes/user.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT} `);
});