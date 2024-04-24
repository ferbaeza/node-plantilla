import { UsuarioEditado } from "../Domain/UsuarioEditado.js";
import { UsuarioService } from "../../../Shared/Domain/Service/UsuarioService.js";
import { UsuarioIdNOExisteException, UsuariosEmailYaExisteException } from "../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js";

export class EditarUsuarioCommandHandler {
    constructor(repository) {
        this.repository = repository;
        this.service = new UsuarioService(this.repository);
    }

    async handle(command) {
        const usuarios = await this.repository.findAll();
        if (usuarios.length == 0) {
            throw new NOExistenUsuariosException();
        }

        const usuario = await this.repository.findOne({ id: command.id });
        if (!usuario) {
            throw new UsuarioIdNOExisteException();
        }
        const usuarioEditado = UsuarioEditado.fromCommand(command, usuario);
        
        const verificarEmailNoCoincide = await this.service.verificarEmailUsuario(usuarioEditado, usuarios);
        if (verificarEmailNoCoincide) {
            throw new UsuariosEmailYaExisteException();
        }

        const usuarioActualizado = await this.repository.update(usuarioEditado);
        return { usuarioActualizado };

    }
}