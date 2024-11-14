import { FastifyReply, FastifyRequest } from "fastify";
import { PlantsService } from "./plants.service";

export class PlantsController {
    constructor(private readonly plantService = new PlantsService()) {}

    async find(request: FastifyRequest, response: FastifyReply): Promise<void> {
        const plants = await this.plantService.load();
        console.log(plants);
        response.send(plants);
    }
}