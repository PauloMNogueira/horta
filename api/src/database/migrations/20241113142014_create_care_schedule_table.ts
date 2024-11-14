import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('care_schedule', (table) => {
        table.increments('id').primary();
        table
            .integer('planting_id')
            .unsigned()
            .references('id')
            .inTable('plantings')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');  
        table.string('task');
        table.date('schedule_date');
        
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('care_schedule');
}

