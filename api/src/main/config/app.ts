import fastify from "fastify";
import { fastifyRequestContext } from '@fastify/request-context';
import { registerPlantsDomainRoutes } from "../domains/plants/plants.router";
export const app = fastify({
    logger: true,
});

void app.register(fastifyRequestContext);
void app.register(registerPlantsDomainRoutes, {prefix: ''});

app.setErrorHandler((error, _request, response) => {
    console.error('An unknown error occurred', error);
    return response.status(500).send({ message: 'Um erro inesperado ocorreu' });
  });