/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function(knex) {
    return knex.schema.createTable('url', (table) => {
        table.increments('id');
        table.string('originalUrl').notNullable();
        table.string('shortUrlToken').notNullable().unique();
        table.integer('clicks').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const down = function(knex) {
  return knex.schema.dropTable('url');
};

export {up, down};
