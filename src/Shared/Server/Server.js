import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { port } from '../Config/config.js';
import { apiRouter } from '../Routes/ApiRouterProvider.js';
// import { connection } from '../Database/DatabaseConnection.js';

export class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        // this.database();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/', apiRouter);
    }
    database() {
        connection();
    }

    startServer() {
        this.app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port} `);
        });
    }
}


