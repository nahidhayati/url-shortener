import '../../env.js';
import camelcaseKeys from 'camelcase-keys';
import { snakeCase } from 'snake-case';
import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    wrapIdentifier: (value) => snakeCase(value),
    postProcessResponse: (result) => camelcaseKeys(result),
    connection: {
      host: 'db',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
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

export default config;
