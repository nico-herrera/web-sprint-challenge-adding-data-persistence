const db = require('../../data/dbConfig');

module.exports = {
    // get all resources
    findResources: () => {
    return db('resources')
    },

     // create new resource
     insertResource: (newResource) => {
        return db('resources')
        .insert(newResource)
        },
}