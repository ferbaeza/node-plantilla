import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { port } from '../Config/config.js';
import { apiRouter } from '../Routes/ApiRouterProvider.js';
import { conectar }  from '../Database/DatabaseConnection.js';


export class Server {
    
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
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

    startServer() {
        this.app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port} `);
        });
    }
}


