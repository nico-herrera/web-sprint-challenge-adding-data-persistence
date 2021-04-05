const express = require('express')

const server = express();;
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router');

server.use(express.json())

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.use((error, req, res, next) => {
    error.error && console.error(error);
    res.status(error.status).json({message: error.message})
})

module.exports = server;