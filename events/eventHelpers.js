const db = require('../database/db-config.js');

module.exports = {
    find,
    insert,
    update,
    destroy,

}




function find() {
    return db('events');
}

function insert(event) {
    return db('events').insert(event);
}

function update(id, e) {
    return db('events').where({id}).update(e);
}

function destroy(id) {
    return db('events').where({id}).del();
}


