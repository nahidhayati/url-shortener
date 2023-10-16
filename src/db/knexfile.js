import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';
import { snakeCase } from 'snake-case';

dotenv.config();

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
