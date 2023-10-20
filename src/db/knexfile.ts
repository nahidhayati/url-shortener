import '../../env.ts';
import camelcaseKeys from 'camelcase-keys';
import { snakeCase } from 'snake-case';
import { Knex } from 'knex';

interface KnexConfiguration {
  [key: string]: Knex.Config;
}

const configs: KnexConfiguration = {
  development: {
    client: 'postgresql',
    wrapIdentifier: (value: string) => snakeCase(value),
    postProcessResponse: (result: any) => camelcaseKeys(result),
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      //extension: 'ts',
      tableName: 'knex_migrations',
    },
  },
};

export default configs;
