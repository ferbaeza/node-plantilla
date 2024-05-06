import { conectar } from "./DatabaseConnection.js";

async function fetch(query) {
    const pool = await conectar();
    const resultado = await pool.query(query);
    return resultado.rows;
}







export { fetch };