import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("plant_requirements").del();

    const [tomate, alface] = await knex('plants').whereIn('name', ['Tomate', 'Alface']).select('id');
    console.log(tomate, alface);
    // Inserts seed entries
    await knex("plant_requirements").insert([
        { 
            plant_id: tomate.id, 
            sunlight: 'Full',
            watering_frequency: 'Frequent',
            temperature: '15-25°C', 
        },
        { 
            plant_id: alface.id, 
            sunlight: 'Full',
            watering_frequency: 'Frequent',
            temperature: '15-25°C', 
        },
    ]);
};
