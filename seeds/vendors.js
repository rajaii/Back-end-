
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vendors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {id: 1, name: 'Jason', email: 'judomaxwell@yahoo.com', 'phone number': '305-788-4234' },
        {id: 2, name: 'Ali', email: 'bjjforever@yahoo.com', 'phone number': '732-798-4234' },
        {id: 3, name: 'camelCaseLlc', email: 'jsdfgsdfg@yahoo.com', 'phone number': '995-788-4934' }
      ]);
    });
};
