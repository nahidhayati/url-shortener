/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('url', table => {
        table.increments('id');
        table.string('original_url').notNullable();
        table.string('short_url').notNullable().unique();
        table.integer('clicks', 0).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('url')
};
