import { UsuarioController } from "../Web/Controller.js";
import { UsuarioService } from "../../../Escritura/Shared/Domain/Service/UsuarioService.js";
import { UsuarioEscrituraRepository } from '../../../Escritura/Shared/Infrastructure/UsuarioRepository.js';
import { UsuarioLecturaRepository } from "../../../Lectura/Listado/Infrastructure/UsuarioLecturaRepository.js";
import { UsuarioFichaRepository } from "../../../Lectura/FichaUsuario/Infrastructure/UsuarioFichaRepository.js";
import { ListarUsuariosCommandHandler } from "../../../Lectura/Listado/Application/ListarUsuariosCommandHandler.js";
import { FichaUsuarioCommandHandler } from "../../../Lectura/FichaUsuario/Application/FichaUsuarioCommandHandler.js";
import { CrearUsuarioCommandHandler } from "../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler.js";

//!Escritura//
//* Crear Usuario//
const usuarioEscrituraRepositoryInterface = new UsuarioEscrituraRepository()
const service = new UsuarioService(usuarioEscrituraRepositoryInterface);
const crearUsuarioCommandHandler = new CrearUsuarioCommandHandler(
    usuarioEscrituraRepositoryInterface,
    service
);
//!Lectura//
//* Listar Usuarios//
const usuarioRepositoryInterface = new UsuarioLecturaRepository();
const listarUsuariosCommandHandler = new ListarUsuariosCommandHandler(usuarioRepositoryInterface);
//* Listar Ficha Usuario//
const usuarioFichaRepositoryInterface = new UsuarioFichaRepository();
const fichaUsuarioCommandHandler = new FichaUsuarioCommandHandler(usuarioFichaRepositoryInterface);
//!Controller//
const Controller = new UsuarioController(
    crearUsuarioCommandHandler, 
    listarUsuariosCommandHandler,
    fichaUsuarioCommandHandler
);

export { Controller };
