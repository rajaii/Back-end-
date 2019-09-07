const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}


function find(query) {
    const { page = 1, limit = 2, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);
  
    let rows = db('events')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset);
  
    return rows;
  }

function findById(id) {
    return db('events')
      .where({id})
      .first();
}

async function add(event) {
    const{id} = await db('events').insert(event);
    return findById(id);
}

function remove(id) {
    return db('events')
      .where({id})
      .del();
}

function update(id, changes) {
    return db('events')
    .where({id})
    .update(changes, '*');
}