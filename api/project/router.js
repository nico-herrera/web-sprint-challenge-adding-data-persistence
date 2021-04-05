const router = require('express').Router()

const Projects = require('./model');

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.findProjects();
        res.status(200).json(projects)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

router.post('/', async (req, res) => {
    try {
        const newProject = await Projects.insertProject(req.body);
        res.status(201).json(req.body)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;