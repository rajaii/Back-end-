
exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
      tbl.increments('id');
      tbl.string("description").notNullable()
      tbl.integer('date/time')
      tbl.integer('budget').notNullable();
  })

  .createTable('users', tbl => {
    tbl.increments();

    tbl
      .string('username', 255)
      .notNullable()
      .unique();
    tbl.string('password', 255).notNullable();
   
  })

  .createTable("vendors", tbl => {
    tbl.increments("id")
    tbl.string('name').notNullable()
    tbl.string('email')
    tbl.string('phone number').notNullable()

  })
  
  .createTable("todo list", tbl => {
    tbl.increments('id')
    tbl.string("ToDO item").notNullable()
    tbl.boolean("completed").notNullable().defaultTo("false");

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users') ,   //continue after this to delete all tables properly
         knex.schema.dropTableIfExists('events');
};
