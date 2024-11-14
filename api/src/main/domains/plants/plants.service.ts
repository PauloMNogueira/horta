import { Plants } from "./plants.entity";
import { PlantsRepository } from "./plants.repository";

export class PlantsService {
    constructor(private readonly repository = new PlantsRepository()){}

    async load(): Promise<Plants[]> {
        return await this.repository.load();
    }
}