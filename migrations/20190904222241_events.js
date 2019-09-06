
exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
      tbl.increments('id');
      //continue here
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');  //continue after this to delete all tables properly
};
