/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', function (table) {
        table.increments('id').primary();
                table.string('product').notNullable();
                table.integer('price').notNullable();
                table.integer('customer_id').notNullable();
                table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders')
  
};
