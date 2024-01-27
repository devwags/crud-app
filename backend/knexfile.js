// Update with your config settings.
require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    migrations: {
      directory: './migrations'
    },
    connection: {
      connectionString: process.env.DB_CONNECTION_STRING,
      user: process.env.PG_USER,
      password: process.env.PG_PWD,
      database: process.env.PG_DB,
      host: process.env.PG_HOST,
      port: process.env.PG_PORT
    },
    seeds: {
      directory: './seeds'
    }
  }
};
