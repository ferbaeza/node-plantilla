import typeorm from 'typeorm';
// import Usuario from './Entities/Usuarios/Usuario.js';
import { database, username , password, host, dialect, portDB} from "../Config/config.js";


export async function connection(){
    try {
        const connection = typeorm.createConnection({
            type: "postgres",
            host: host,
            port: Number(portDB),
            username: username,
            password: password,
            database: database,
            synchronize: true,
            logging: false,
            entities: [
                "./Entities/**/*.js"
            ],
            migrations: [
                "./Migrations/**/*.js"
            ],
            // subscribers: [
            //     "src/subscriber/**/*.ts"
            // ],


        }).then(async connection => {
            console.log("Successfully connected to the database.");
            return connection;

        }).catch(error => console.log(error));
        console.log('Conexión a la base de datos establecida correctamente');


    } catch (error) {
        console.error('Error:', error);
    }
}

export async function close(){
    await connection.connection.close();
    console.log('Conexión a la base de datos cerrada');
}

