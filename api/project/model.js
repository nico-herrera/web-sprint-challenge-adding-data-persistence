const db = require('../../data/dbConfig');

module.exports = {
    // get all projects
    findProjects: () => {
    return db('projects')
    },
    // create new project
    insertProject: (newProject) => {
    return db('projects')
    .insert(newProject)
    },
    
}