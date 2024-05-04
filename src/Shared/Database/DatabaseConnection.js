import pg from 'pg';
import { database, host, password, portDB, username } from '../Config/config.js';


export const conectar = async () => {
    try {
        const pool = new pg.Pool(
            {
                user: username,
                host: host,
                database: database,
                password: password,
                port: portDB,
            }
        );
        console.log('Conectado a la base de datos correctamente.');
        
        return pool;

    } catch (error) {
        console.error('Error al conectar a la base de datos.', error);
    }
};
