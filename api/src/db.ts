import Knex from "knex";
import config from "./knexfile";
console.log(process.env.NODE_ENV);
const environment = process.env.NODE_ENV || 'development';
const knexConfig = config[environment];
const db = Knex(knexConfig);
export default db;