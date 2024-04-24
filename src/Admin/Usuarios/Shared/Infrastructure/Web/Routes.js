import express  from 'express';
import { Controller } from '../Dependencies/Usuario.Dependencies.js';

const router = express.Router();

router.get('/usuarios', Controller.getAll.bind(Controller.getAll));
router.post('/login', Controller.login.bind(Controller.login));
router.post('/usuario', Controller.registrarUsuario.bind(Controller.registrarUsuario));

router.get('/usuario/:id', Controller.fichaUsuario.bind(Controller.fichaUsuario));
router.put('/usuario/:id', Controller.modificarUsuario.bind(Controller.modificarUsuario));
router.delete('/usuario/:id', Controller.borrarUsuario.bind(Controller.borrarUsuario));

// router.get('/usuario/:id/proyectos', Controller.listarProyectosUsuario.bind(Controller.listarProyectosUsuario));

export { router as userRouter };