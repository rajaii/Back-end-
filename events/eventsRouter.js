const express = require('express');
const Events = require('./eventsModel');
const rouuter = express.Router();


router.get('/', async (req,res) => {
    try {
        const events = await Events.find(req.query);
        res.status(200).json(events);
    } catch(error) {
        res.status(500).json({message: "Error retrieving events"})
    }
})