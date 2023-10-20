import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('url', (table: Knex.TableBuilder) => {
    table.increments('id');
    table.string('originalUrl').notNullable();
    table.string('shortUrlToken').notNullable().unique();
    table.integer('clicks').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('url');
}
