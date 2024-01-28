/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('items', (table) => {
        table.increments('id');
        table.string('userId');
        table.string('itemName')
        table.text('description');
        table.integer('quantity');
        table.string('imageUrl')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items');
};
