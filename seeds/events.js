
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {EventName: 'McDonalds reunion', description: 'reunion of franchisees', date: '11/3/1980', time: '12:00pm', budget: 22000 },
        {EventName: 'high school reunion', description: 'reunion of ppl from RFH', date: '12/23/2080', time: '12:00am', budget: 220000 },,
        {EventName: 'burger revolution', description: 'burger bash', date: '1/3/2180', time: '3:00pm', budget: 12000 },
      ]);
    });
};
