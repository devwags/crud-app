/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstname: 'alice', lastname: 'seamstress', username: 'sew_what', password: 'pwd'},
    {firstname: 'bob', lastname: 'businessman', username: 'bbiz', password: 'pwd'},
    {firstname: 'charlie', lastname: 'lumberjack', username: 'woodchuck', password: 'pwd'}
  ]);
};
