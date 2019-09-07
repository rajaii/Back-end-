
exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
      tbl.increments('id');
      //continue here
  })

  .createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
  });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events') ,   //continue after this to delete all tables properly
         knex.schema.dropTableIfExists('users');
};
