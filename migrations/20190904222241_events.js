
exports.up = function(knex ) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id')

    tbl
      .string('username', 255)
      .notNullable()
      .unique()
    tbl.string('password', 255).notNullable()
   
  })

  .createTable('events', tbl => {
    tbl.increments('id')
    tbl.string("description").notNullable()
    tbl.integer('budget').notNullable()
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
    tbl.boolean("completed").notNullable().defaultTo("false")

  })
};

exports.down = function(knex ) {
  return knex.schema.dropTableIfExists('todo list')
  .dropTableIfExists('vendors')
  .dropTableIfExists('events')
  .dropTableIfExists('users')   // Reverse order of which it was implemented to fall off correctly. 
};
