import { knex } from "../../../helpers/knex";

export class PlantsRepository {
    async load() {
        const plants = await knex.table('plants').select('*');
        return plants;
    }
}