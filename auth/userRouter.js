const express = require('express');
const router = express.Router();

const userDb = require('./userHelpers.js');

router.get('/', (req, res) => {
    userDb.findForGet()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    userDb.findBy({id})
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json(err.message);
    })
})

router.get("/:id/events", (req, res) => {
    const {id} = req.params;
    userDb.getUserEvents(id)
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
 })

 router.get("/:id/events/total", (req, res) => {
    const {id} = req.params;
    userDb.getUserEventsTotal(id)
        .then(event => {
            console.log(event)
            res.status(200).json(event)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
 })

 router.get("/:id/events/todolist", (req, res) => {
    const {id} = req.params;
    userDb.getUserEventsTodo(id)
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
 })

 router.get("/:id/events/vendor", (req, res) => {
    const {id} = req.params;
    userDb.getUserEventsVendor(id)
        .then(event => {
            res.status(200).json(event)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
 })

 

//add functionality for req.body id to tie user to posts etc, then make tests pass, then deploy
//configure process.env.secret


 

module.exports = router;