/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export const up = async function (knex) {
  await knex.schema.createTable('accounts', (table) => {
    table.increments('id').primary(); 
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id') 
      .inTable('users') 
      .onDelete('CASCADE'); 
    table.string('account_number').unique().notNullable(); 
    table.decimal('balance', 14, 2).notNullable().defaultTo(0); 
    table.string('status').defaultTo('active'); 
    table.timestamps(true, true); 
  });
};

export const down = async function (knex) {
  await knex.schema.dropTableIfExists('accounts');
};
