const express = require('express')
const Vendors = require('./vendorsModel')
const router = require('express').Router();


router.get('/', async (req,res) => {
    try {
        const vendors = await Vendors.find(req.query);
        res.status(200).json(vendors);
    } catch(error) {
        res.status(500).json({message: "Error retrieving vendors"})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const vendor = await Vendors.findById(req.params.id);
          if(vendor) {
            res.status(200).json(vendor);
        } else {
            res.status(404).json({message: 'Vendor not found'});
        }
    } catch(error) {
        res.status(500).json({message: "Error retrieving the vendor"});
    }
})


router.post("/", async(req, res) => {
    try {
        const vendor = await Vendors.add(req.body);
        res.status(201).json(vendor)
    } catch (error) {
        res.status(500).json({message: "Error adding vendor"});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const total = await Vendors.remove(req.params.id);
        if (total > 0) {
            res.status(200).json({message: 'The vendor has been removed'})
        } else {
            res.status(404).json({message: "The vemdor could not be found"})
        }
    }   catch(errof) {
        res.status(500).json({message: 'Error removing vendor'});
    }
});



router.put('/:id', async(req, res) => {
    try{
        const vendor = await Vendors.update(req.params.id, req.body)
        if (hub) {
            res.status(200).json(vendor)
        } else {
            res.status(404).json({message: 'The vendor could not be found'})
        }
    }  catch (error) {
        res.status(500).json({message: 'Error updating vendor'})
    }
 })


 router.get("/vendors", authenticate, (req, res) => {
    userDb.fetch()
    .then(vendors => {
      res.send(vendors)
    }) .catch( error => res.send(error));
});


module.exports = router;