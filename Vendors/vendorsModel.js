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
    
  
    let rows = db('vendors')
      .orderBy(sortby, sortdir)
      .limit(limit)
      .page(page);
      return rows;
  }

  function findById(id) {
    return db('vendors')
      .where({id})
      .first();
}

async function add(vendor) {
    const{id} = await db('vendors').insert(vendor);
    return findById(id);
}

function remove(id) {
    return db('vendors')
      .where({id})
      .del();
}

function update(id, changes) {
    return db('vendors')
    .where({id})
    .update(changes, '*');
}