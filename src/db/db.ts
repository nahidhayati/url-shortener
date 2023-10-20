import knex from 'knex';
import configs from './knexfile.js';

const config = configs['development'];
const db = knex(config);

export default db;
