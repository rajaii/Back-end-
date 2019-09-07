//this is from the explanation of what the project is:
//You can add a list of vendors you need to maintain relationships with, 
//and create a shopping or to do list with the ability to mark off items as done. 
//When saved you can view a preview of the event on the homepage.

const express = require('express');
const router = express.Router();
const eventDb = require('./eventHelpers.js');


//base routes /api/events


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


// vendor routes /api/events/vendors


router.get('/vendors', async (req, res) => {
    try {
        const vendor = await eventDb.findVendor();
        res.status(200).json(vendor);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/vendors', async (req, res) => {
    try {
        const newVendor = await eventDb.insertVendor(req.body);
        res.status(201).json(newVendor);
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

router.put('/vendors/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVendor = await eventDb.updateVendor(id, req.body);
        res.status(201).json(updatedVendor);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/vendors/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vendorGone =  await eventDb.destroyVendor(id);
        res.status(204).json(vendorGone);
    }
    catch (err) {
        res.status(500).json(err);
    }
})



//toDo list routes /api/events/todolist




router.get('/todolist', async (req, res) => {
    try {
        const todoList = await eventDb.findTodoList();
        res.status(200).json(todoList);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/todolist', async (req, res) => {
    try {
        const newTodoList = await eventDb.insertTodoList(req.body);
        res.status(201).json(newTodoList);
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

router.put('/todolist/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodoList = await eventDb.updateTodoList(id, req.body);
        res.status(201).json(updatedTodoList);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/todolist/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todoListGone =  await eventDb.destroyTodoList(id);
        res.status(204).json(todoListGone);
    }
    catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;