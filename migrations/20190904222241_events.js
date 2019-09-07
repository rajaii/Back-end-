
exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
      tbl.increments('id');
      users.string("description").notNullable()
      users.integer('date/time')
      users.integer('budget').notNullable();
  })

  .createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
   
  })

  .createTable("vendors", tbl => {
    tbl.increments("id")
    vendors.string('name').notNullable()
    vendors.string('email')
    vendors.string('phone number').notNullable()

  })
  
  .createTable("todo list", tbl => {
    tbl.increments('id')
    todolist.string("ToDO item").notNullable()
    todolist.boolean("completed");

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events') ,   //continue after this to delete all tables properly
         knex.schema.dropTableIfExists('users');
};
