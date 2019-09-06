//this is from the explanation of what the project is:
//You can add a list of vendors you need to maintain relationships with, 
//and create a shopping or to do list with the ability to mark off items as done. 
//When saved you can view a preview of the event on the homepage.

const express = require('express');
const router = express.Router();
const eventDb = require('./eventHelpers.js');

router.get('/', async (req, res) => {
    try {
        const event = await eventDb.find();
        res.status(200).json(event);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const newEvent = await eventDb.insert(req.body);
        res.status(201).json(newEvent);
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await eventDb.update(id, req.body);
        res.status(201).json(updatedEvent);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const eventGone =  await eventDb.destroy(id);
        res.status(204).json(eventGone);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;