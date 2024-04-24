import express from 'express';
import { ProyectoController } from './Controller.js';
import { ProyectosRepository } from '../Datasource/ProyectosRepository.js';

const router = express.Router();
const repository = new ProyectosRepository();
const Controller = new ProyectoController(repository);

router.get('/proyectos', Controller.listarProyectos).bind(Controller.listarProyectos);
router.post('/proyectos', Controller.crearProyecto).bind(Controller.crearProyecto);

export { router as proyectosRouter };