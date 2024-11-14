import type { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { PlantsController } from './plants.controller';

const plantsController = new PlantsController();

export function registerPlantsDomainRoutes(
    fastify: FastifyInstance,
    _options: FastifyPluginOptions,
    done: (error?: Error) => void,
) {
    fastify.get('/plants', plantsController.find.bind(plantsController));
    // fastify.get('/plants/:id', plantsController.getPlantById.bind(plantsController));
    // fastify.post('/plants', plantsController.create.bind(plantsController));
    // fastify.put('/plants/:id', plantsController.updatePlant.bind(plantsController));
    // fastify.delete('/plants/:id', plantsController.deletePlant.bind(plantsController));
    done();
}