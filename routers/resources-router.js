const express = require("express");
const router = express.Router();
const Resources = require('../models/resources');

router.get('/', (req,res) => {
    Resources.getResources()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req,res) => {
    Resources.getResourcesById(req.params.id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/', (req,res) => {
    Resources.addResources(req.body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router;