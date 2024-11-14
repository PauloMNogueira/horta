import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('plant_requirements', (table) => {
        table.increments('id').primary();
        table
            .integer('plant_id')
            .unsigned()
            .references('id')
            .inTable('plants')
            .onDelete('CASCADE')       // Define o que acontece ao excluir um plant
            .onUpdate('CASCADE');  
        table.string('sunlight');
        table.string('soil_type');
        table.string('watering_frequency');
        table.string('temperature');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('plant_requirements');
}

