import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: 'localhost',
      user: 'develop',
      password: 'develop',
      database: 'horta',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};

export default config;