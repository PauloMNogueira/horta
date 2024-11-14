import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('plantings', (table) => {
        table.increments('id').primary();
        table
            .integer('plant_id')
            .unsigned()
            .references('id')
            .inTable('plants')
            .onDelete('CASCADE')       // Define o que acontece ao excluir um plant
            .onUpdate('CASCADE');  
        table.date('planted_date');
        table.date('harvest_date').nullable;
        
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('plantings');
}

