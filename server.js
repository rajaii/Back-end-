const express = require('express');
const EventsRouter = require('./events/eventsRouter');
const server = express();


server.use(express.json());
server.use('/api/events', EventsRouter);


server.get("/", (req, res) => {
    res.send(`
    <h2> Corporate Events Planner </h2>
    <p> Welcome to the Events Database API </p>
    
    `);
});

module.exports = server;