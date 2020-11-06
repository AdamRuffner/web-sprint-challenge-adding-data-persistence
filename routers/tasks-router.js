const express = require("express");
const router = express.Router();
const Tasks = require('../models/tasks');

router.get('/', (req,res) => {
    Tasks.getTasks()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req,res) => {
    Tasks.getTasksById(req.params.id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/', (req,res) => {
    Tasks.addTasks(req.body) 
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router;
