import '../../env.js'
import camelcaseKeys from 'camelcase-keys';
import { snakeCase } from 'snake-case';

console.log('knex', performance.now(), process.env.DB_NAME)

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'postgresql',
    wrapIdentifier: (value) => snakeCase(value),
    postProcessResponse: (result) => camelcaseKeys(result),
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
