const express = require("express");

const server = express();

const authRouter = require("./auth/auth-router.js");
const authenticate = require("./auth/authenticate-middleware.js");

server.use(express.json());
server.use("/", authRouter);

module.exports = server;
