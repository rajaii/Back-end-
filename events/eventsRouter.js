const express = require('express');
const Events = require('./eventsModel');
const router = require('express').Router();


router.get('/', async (req,res) => {
    try {
        const events = await Events.find(req.query);
        res.status(200).json(events);
    } catch(error) {
        res.status(500).json({message: "Error retrieving events"})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const event = await Events.findById(req.params.id);
          if(event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({message: 'Event not found'});
        }
    } catch(error) {
        res.status(500).json({message: "Error retrieving the event"});
    }
});

router.post("/", async(req, res) => {
    try {
        const event = await Events.add(req.body);
        res.status(201).json(event)
    } catch (error) {
        res.status(500).json({message: "Error adding event"});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const total = await Events.remove(req.params.id);
        if (total > 0) {
            res.status(200).json({message: 'The event has been removed'})
        } else {
            res.status(404).json({message: "The event could not be found"})
        }
    }   catch(errof) {
        res.status(500).json({message: 'Error removing event'});
    }
});

router.put('/:id', async(req, res) => {
    try{
        const event = await Events.update(req.params.id, req.body)
        if (hub) {
            res.status(200).json(event)
        } else {
            res.status(404).json({message: 'The event could not be found'})
        }
    }  catch (error) {
        res.status(500).json({message: 'Error updating event'})
    }
 })


module.exports = router;