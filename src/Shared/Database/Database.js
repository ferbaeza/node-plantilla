import { conectar } from "./DatabaseConnection.js";


async function getAll(table) {
    const pool = await conectar();
    const resultado = await pool.query(`SELECT * FROM ${table}`);
    return resultado.rows;
}

async function findOne(table, especification) {
    const pool = await conectar();
    let key = Object.keys(especification)[0];
    let value = especification[key];

    const resultado = await pool.query(`SELECT * FROM ${table} t WHERE t.${key} = '${value}'`);
    return(resultado.rows[0]);
}


async function insert(table, data) {

    const pool = await conectar();

    let keys = Object.keys(data);
    let values = Object.values(data);
    
    let campos = keys.join(',');
    let valores = values.map((value) => `'${value}'`).join(',');
    
    console.log('Keys:', keys);
    console.log('Values:', values);
    console.log('Campos:', campos);
    console.log('Valores:', valores);
    
    try {
        const resultado = await pool.query(`Insert into ${table} (${campos}) values (${valores}) RETURNING *`);
        return (resultado.rows[0]);
        
    } catch (error) {
        console.log('Error:', error);
        
    }
}

export { getAll, findOne, insert };