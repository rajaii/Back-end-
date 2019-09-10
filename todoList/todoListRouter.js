const express = require('express');
const router = express.Router();
const todoListDb = require('./todoListHelpers.js');

router.get('/', async (req, res) => {
    try {
        const todoList = await TodoListDb.find();
        res.status(200).json(todoList);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const newTodoList = await todoListDb.insert(req.body);
        res.status(201).json(newTodoList);
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodoList = await todoListDb.update(id, req.body);
        res.status(201).json(updatedTodoList);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todoListGone =  await todoListDb.destroy(id);
        res.status(204).json(todoListGone);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;