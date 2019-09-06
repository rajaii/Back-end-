
exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
      tbl.increments('id');
      tbl.string('event name', 128)
        .notNullable()
        .unique();
      tbl.string('description');
      tbl.string('date')
        .notNullable();
      tbl.string('time', 128)
        .notNullable();
      tbl.integer('budget', 128)
        .notNullable();
  })
  .createTable('users', tbl => {
    tbl.increments('id');
    tbl.string('company', 128)
      .notNullable()
    tbl.string('role', 128)
      .notNullable()
    tbl.string('email')
      .notNullable()
      .unique();
    tbl.string('username')
      .notNullable()
      .unique();
    tbl.string('password')
      .notNullable();
  })
};
//company, role, email, password, username
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');  //continue after this to delete all tables properly
};
