const express = require('express');
const server = express();

const authRouter = require('../auth/authRouter.js');
const eventsRouter = require('../events/eventsRouter.js');

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/events', eventsRouter);

module.exports = server;