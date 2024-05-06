import { UsuarioController } from "../Web/Controller.js";
import { EmailUsuarioExisteService } from "../../../Escritura/Shared/Domain/Service/EmailUsuarioExisteService.js";
import { UsuarioEscrituraRepository } from '../../../Escritura/Shared/Infrastructure/UsuarioRepository.js';
import { ListarUsuariosCommandHandler } from "../../../Lectura/Listado/Application/ListarUsuariosCommandHandler.js";
import { FichaUsuarioCommandHandler } from "../../../Lectura/FichaUsuario/Application/FichaUsuarioCommandHandler.js";
import { CrearUsuarioCommandHandler } from "../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler.js";
import { UsuarioLecturaRepository } from "../../../Lectura/Shared/Infrastructure/UsuarioLecturaRepository.js";
import { EditarUsuarioCommandHandler } from "../../../Escritura/EditarUsuario/Application/EditarUsuarioCommandHandler.js";

//!Escritura//
//* Crear Usuario//
const usuarioEscrituraRepositoryInterface = new UsuarioEscrituraRepository()
const usuarioLecturaRepository = new UsuarioLecturaRepository();

const service = new EmailUsuarioExisteService(usuarioLecturaRepository);

const crearUsuarioCommandHandler = new CrearUsuarioCommandHandler(
    usuarioEscrituraRepositoryInterface,
    service
);

const editarUsuarioCommandHandler = new EditarUsuarioCommandHandler(
    usuarioLecturaRepository,
    usuarioEscrituraRepositoryInterface,
    service
);
//!Lectura//
//* Listar Usuarios//
const listarUsuariosCommandHandler = new ListarUsuariosCommandHandler(usuarioLecturaRepository);
//* Listar Ficha Usuario//
const fichaUsuarioCommandHandler = new FichaUsuarioCommandHandler(usuarioLecturaRepository);
//!Controller//
const Controller = new UsuarioController(
    crearUsuarioCommandHandler, 
    listarUsuariosCommandHandler,
    fichaUsuarioCommandHandler,
    editarUsuarioCommandHandler
);

export { Controller };
