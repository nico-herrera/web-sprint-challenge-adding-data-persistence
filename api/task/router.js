const router = require('express').Router()

const Tasks = require('./model');

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.findTasks();
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const newTasks = await Tasks.insertTasks(req.body);
        res.status(201).json(req.body)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;
