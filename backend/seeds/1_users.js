/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, firstname: 'alice', lastname: 'seamstress', username: 'acoop', password: 'pwd'},
    {id: 2, firstname: 'bob', lastname: 'businessman', username: 'bsac', password: 'pwd'},
    {id: 3, firstname: 'charlie', lastname: 'lumberjack', username: 'charlie', password: 'pwd'}
  ]);
};
