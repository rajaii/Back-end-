
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_event').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_event').insert([
        {id: 1, events_id: 1, user_id: 1},
        {id: 2, events_id: 2, user_id: 1},
        {id: 3,events_id: 3, user_id: 1},
        
      ]);
    });
};
