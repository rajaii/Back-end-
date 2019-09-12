
exports.up = function(knex) {
  /* to beef up if
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
  */
 return knex.schema.createTable('users', tbl => {
   tbl.increments('id')
   tbl.string('company', 128)
      .notNullable()
    tbl.string('role', 128)
      .notNullable()
    tbl.string('email')
      .notNullable()
      .unique()
    tbl.string('username', 255)
    .notNullable()
    .unique()
  tbl.string('password', 255).notNullable();
 
})

.createTable('events', tbl => {
  tbl.increments('id')
  tbl.string("description").notNullable()
  tbl.integer('budget').notNullable();
})


.createTable("vendors", tbl => {
  tbl.increments("id")
  tbl.string('name').notNullable()
  tbl.string('email')
  tbl.string('phone number').notNullable();
  

})

.createTable("todo list", tbl => {
  tbl.increments('id')
  tbl.string("ToDO item").notNullable()
  tbl.boolean("completed").notNullable().defaultTo("false")
  .unsigned()
  tbl.integer('events_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('events')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
})


.createTable("user_event", tbl => {
  tbl.increments()
  tbl
  .integer("user_id")
  .notNullable()
  .unsigned()
  .references("users.id")
  tbl
  .integer("events_id")
  .notNullable()
  .unsigned()
  .references("events.id")
})

.createTable("event_vendors", tbl => {
  tbl.increments()
  tbl
  .integer("events_id")
  .notNullable()
  .unsigned()
  .references("id")
  .inTable("events");
  tbl
  .integer("vendors_id")
  .notNullable()
  .unsigned()
  .references("id")
  .inTable("vendors");
})

};

exports.down = function(knex ) {
return knex.schema
.dropTableIfExists('event_vendors')
.dropTableIfExists('user_event')
.dropTableIfExists('todo list')
.dropTableIfExists('vendors')
.dropTableIfExists('events')
.dropTableIfExists('users') ;
};
