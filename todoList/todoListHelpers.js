const db = require('../database/db-config.js');

module.exports = {
    find,
    insert,
    update,
    destroy,

}

function find() {
    return db('todo list');
}

function insert(todoList) {
    return db('todo list').insert(todoList);
}

function update(id, t) {
    return db('todo list').where({id}).update(t);
}

function destroy(id) {
    return db('todo list').where({id}).del();
}