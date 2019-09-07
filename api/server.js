const express = require('express')
const server = express()
const authenticate = require('../auth/authenticate-middleware')
const eventsRouter = require("../events/eventsRouter")
const authRouter = require('../auth/authRouter.js');

server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/events' , authenticate , eventsRouter);


server.get("/", (req, res) => {
    res.send(`
    <h2> Corporate Events Planner </h2>
    <p> Welcome to the Events Database API </p>
    
    `);
});

module.exports = server;