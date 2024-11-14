import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('plants', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('plants');
}

