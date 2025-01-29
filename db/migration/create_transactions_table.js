/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable('transactions', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.string('type').notNullable(); 
      table.decimal('amount', 14, 2).notNullable();
      table.string('narration').notNullable();
      table.string('currency').nullable();
      table.string('account_number').notNullable();
      table.string('account_name').notNullable();
      table.string('bank_code').notNullable();
      table.string('bank').notNullable();
      table.string('reference').unique();
      table.string('status').notNullable().defaultTo('pending'); 
      table.timestamps(true, true);
    });
  };
  
  export const down = async function (knex) {
    await knex.schema.dropTableIfExists('transactions');
  };
  