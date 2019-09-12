
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, company: 'lambda', role: 'president', email: 'lambdadev@yahoo.cno', username: 'asasdfsadf', password: 'password'},
        {id: 2, company: 'mcyds', role: 'ceo', email: 'raycrocsuck@yahoo.net', username: 'aaaa', password: 'password'},
        {id: 3, company: 'bjjinc', role: 'blackbelt', email: 'whoknows@lambda.com', username: 'bbbbbbbbbb', password: 'password'}
      ]);
    });
};
