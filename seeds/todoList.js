
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todo list').insert([
        {id: 1, 'ToDo Item' : 'call vendors', completed: false, events_id: 1},
        {id: 2, 'ToDo Item': 'make banquet hall design', completed: false, events_id: 1},
        {id: 3, 'ToDo Item': 'prep event food', completed: true, events_id: 2},
      ]);
    });
};
