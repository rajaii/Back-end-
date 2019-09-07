const knex = require("knex");

const config = require('../knexfile.js');

const userDb = knex(config.development);

module.exports = userDb;