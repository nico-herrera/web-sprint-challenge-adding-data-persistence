const db = require('../../data/dbConfig');

module.exports = {
    // get all tasks
    findTasks: () => {
    return db('tasks')
    },
    // create new tasks
    insertTasks: (newTasks) => {
    return db('tasks')
    .insert(newTasks)
    },
    
}
