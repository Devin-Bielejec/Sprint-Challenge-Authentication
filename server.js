const express = require("express");

const server = express();

const authRouter = require("./auth/auth-router.js");
const dadJokesRouter = require("./jokes/jokes-router.js");

server.use(express.json());
server.use("/", authRouter);
server.use("/dadjokes", dadJokesRouter);

module.exports = server;
