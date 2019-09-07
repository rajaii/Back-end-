//made little tweaks in your code to make them run ie camelcasing those that had spaces, 
//I think putting strings as property names in the object would allow spaces but I'm not sure will ask mon
exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
      tbl.increments('id');
      tbl.string('eventName', 128)
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
  .createTable("vendors", tbl => {
    tbl.increments("id")
    tbl.string('name').notNullable()
    tbl.string('email')
    tbl.string('phoneNumber').notNullable()

  })
  .createTable("todoList", tbl => {
    tbl.increments('id')
    tbl.string("todoItem").notNullable()
    tbl.boolean("completed").notNullable().defaultTo("false");

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');  //continue after this to delete all tables properly
};
