const db = require('../database/db-config.js');

module.exports = {
    find,
    insert,
    update,
    destroy,

}

function find() {
    return db('todoList');
}

function insert(todoList) {
    return db('todoList').insert(todoList);
}

function update(id, t) {
    return db('todoList').where({id}).update(t);
}

function destroy(id) {
    return db('todoList').where({id}).destroy();
}