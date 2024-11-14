import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("plants").del();

    // Inserts seed entries
    await knex("plants").insert([
        {name: 'Tomate', description: ''},
        {name: 'Alface', description: ''},
        {name: 'Rúcula', description: ''},
        {name: 'Couve', description: ''},
        {name: 'Cenoura', description: ''},
        {name: 'Batata', description: ''},
        {name: 'Abobrinha', description: ''},
        {name: 'Espinafre', description: ''},
        {name: 'Pimentão', description: ''},
        {name: 'Pepino', description: ''},
        {name: 'Abóbora', description: ''},
        {name: 'Berinjela', description: ''},
        {name: 'Chuchu', description: ''},
        {name: 'Salsinha', description: ''},
        {name: 'Pepino', description: ''},
        {name: 'Pimentão', description: ''},
        {name: 'Pimentão', description: ''},
    ]);
};
