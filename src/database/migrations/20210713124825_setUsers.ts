import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex('users').insert({
    name: 'felie',
    email: 'feliperrhoden@gmail.com',
    password: '123456'
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex('users').del();
}

