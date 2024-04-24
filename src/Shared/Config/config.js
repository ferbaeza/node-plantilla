import "dotenv/config";

//*Database configuration*/
export const database = String(process.env.DB_NAME) || 'postgres';
export const username = String(process.env.DB_USER) || 'zataca';
export const password = String(process.env.DB_PASS) || 'zataca';
export const host = String(process.env.DB_HOST) || 'postgres';
export const dialect = String(process.env.DB_DIALECT) || 'postgres';
export const portDB = Number(process.env.DB_PORT) || 5432;

//*Server configuration*/
export const port = Number(process.env.PORT) || 5001;
