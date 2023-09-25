/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'alice', password: 'pwd'},
    {id: 2, username: 'bob', password: 'pwd'},
    {id: 3, username: 'charlie', password: 'pwd'}
  ]);
};
