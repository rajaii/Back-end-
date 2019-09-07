
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vendors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {name: 'Jason', email: 'judomaxwell@yahoo.com', phoneNumber: '305-788-4234' },
        {name: 'Ali', email: 'bjjforever@yahoo.com', phoneNumber: '732-798-4234' },
        {name: 'camelCaseLlc', email: 'jsdfgsdfg@yahoo.com', phoneNumber: '995-788-4934' }
      ]);
    });
};
