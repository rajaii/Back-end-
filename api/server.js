const express = require('express');
const server = express();

const authRouter = require('../auth/authRouter.js');

server.use(express.json());
server.use('/api/auth', authRouter);

module.exports = server;