const express = require('express');
const router = express.Router();
const vendorsDb = require('./vendorsHelpers.js');

router.get('/', async (req, res) => {
    try {
        const vendor = await vendorsDb.find();
        res.status(200).json(vendor);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const newVendor = await vendorsDb.insert(req.body);
        res.status(201).json(newVendor);
    } 
    catch (err) {
        res.status(500).json(err.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVendor = await vendorsDb.update(id, req.body);
        res.status(201).json(updatedVendor);
    } 
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vendorGone =  await vendorsDb.destroy(id);
        res.status(204).json(vendorGone);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;