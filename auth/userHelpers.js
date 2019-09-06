const db = require('../database/db-config.js');

module.exports = {
    find,
    findBy,
    create,
    
}

function find() {
    return db('users').select('username', 'password');
}

function create(user) {
    return db('users').insert(user);
}

function findBy(filter) {
    return db('users').where(filter);
}