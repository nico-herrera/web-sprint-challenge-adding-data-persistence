const db = require('../../data/dbConfig');

    // get all resources
const findResources = () => {
    return db('resources')
    }

     // create new resource
const insertResource = async (newResource) => {
    const [resource_id] = await db('resources').insert(newResource);
    return db('resources').where({ resource_id }).first();
    }

module.exports = {
insertResource,
findResources
}
