const db = require('../database/db-config.js');

module.exports = {
    find,
    insert,
    update,
    destroy

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
    return db('vendors').where({id}).del();
}