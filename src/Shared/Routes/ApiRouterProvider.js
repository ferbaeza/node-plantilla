import express  from 'express';
import { ApiResponse } from '../Utils/Response/ApiResponse.js';
import { userRouter } from '../../Admin/Usuarios/Shared/Infrastructure/Web/Routes.js';

const router = express.Router();
const apiPrefix = '/api';

router.get('/', (req, res) => {
    const data = {"message": "Hello World"};
    const mensaje = "Welcome to the API";
    ApiResponse.Ok(res, data, mensaje);
})

router.use(apiPrefix, userRouter);

export { router as apiRouter };