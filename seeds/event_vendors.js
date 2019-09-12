
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('event_vendors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('event_vendors').insert([
        {id: 1, events_id: 1, vendors_id: 1},
        {id: 2, events_id: 1, vendors_id: 2},
        {id: 3, events_id: 1, vendors_id: 3},
       
      ]);
    });
};
