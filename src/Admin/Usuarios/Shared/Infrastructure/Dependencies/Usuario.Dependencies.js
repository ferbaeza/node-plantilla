import { CrearUsuarioCommandHandler } from "../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler.js";
import { UsuarioService } from "../../../Escritura/Shared/Domain/Service/UsuarioService.js";
import { UsuarioEscrituraRepository } from '../../../Escritura/Shared/Infrastructure/UsuarioRepository.js';
import { UsuarioController } from "../Web/Controller.js";


const usuarioEscrituraRepositoryInterface = new UsuarioEscrituraRepository()
const service = new UsuarioService(usuarioEscrituraRepositoryInterface);

const crearUsuarioCommandHandler = new CrearUsuarioCommandHandler(
    usuarioEscrituraRepositoryInterface,
    service
);


const Controller = new UsuarioController(
    crearUsuarioCommandHandler
);

export { Controller };
