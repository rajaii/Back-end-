
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todoList').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todoList').insert([
        {todoItem: 'call vendors', completed: false},
        {todoItem: 'make banquet hall design', completed: false},
        {todoItem: 'prep event food', completed: true},
      ]);
    });
};
