const db = require('../database/db-config.js');

module.exports = {
    find,
    insert,
    update,
    destroy,
    findVendor,
    insertVendor,
    updateVendor,
    destroyVendor,
    findTodoList,
    insertTodoList,
    updateTodoList,
    destroyTodoList,

}

//events


function find() {
    return db('events');
}

function insert(event) {
    return db('events').insert(event);
}

function update(id, e) {
    return db('events').where({id}).update(e);
}


//vendors


function destroy(id) {
    return db('vendors').where({id}).destroy();
}

function find() {
    return db('vendors');
}

function insert(vendor) {
    return db('vendors').insert(vendor);
}

function update(id, v) {
    return db('vendors').where({id}).update(v);
}

function destroy(id) {
    return db('vendors').where({id}).destroy();
}


//todolist


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