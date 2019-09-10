const express = require('express');
const server = express();

const authRouter = require('../auth/authRouter.js');
const eventsRouter = require('../events/eventsRouter.js');
const vendorsRouter = require('../vendors/vendorsRouter.js');
const todoListRouter = require('../todoList/todoListRouter.js');

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/events', eventsRouter);
server.use('/api/vendors', vendorsRouter);
server.use('/api/todolist', todoListRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome To The Corporate Event Planner'});
})

module.exports = server;