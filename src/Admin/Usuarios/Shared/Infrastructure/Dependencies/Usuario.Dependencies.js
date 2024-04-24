import { RegistrarUsuarioCommandHandler } from "../../../Escritura/Registro/Application/RegistrarUsuarioCommandHandler.js";
import { UsuarioService } from "../../../Escritura/Shared/Domain/Service/UsuarioService.js";
import { UsuarioEscrituraRepository } from '../../../Escritura/Shared/Infrastructure/UsuarioRepository.js';
import { UsuarioController } from "../Web/Controller.js";


const usuarioEscrituraRepositoryInterface = new UsuarioEscrituraRepository()
const service = new UsuarioService(usuarioEscrituraRepositoryInterface);

const registrarUsuarioCommandHandler = new RegistrarUsuarioCommandHandler(
    usuarioEscrituraRepositoryInterface,
    service
);


const Controller = new UsuarioController(
    registrarUsuarioCommandHandler
);

export { Controller };
