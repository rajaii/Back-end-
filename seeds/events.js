
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, description: 'reunion of franch', budget: 22000 },
        {id: 2, description: 'reunion of ppl from RFH', budget: 220000 },
        {id: 3, description: 'burger bash', budget: 12000 },
      ]);
    });
};
