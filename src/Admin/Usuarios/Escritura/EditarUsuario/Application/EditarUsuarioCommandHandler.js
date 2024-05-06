import { UsuarioEditado } from "../Domain/UsuarioEditado.js";
import { UsuarioIdNOExisteException, UsuariosEmailYaExisteException } from "../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js";
import { Criteria } from "../../../../../Shared/Criteria/Criteria.js";

export class EditarUsuarioCommandHandler {

    constructor(usuarioLecturaRepository, repository, service) {
        this.usuarioLecturaRepository = usuarioLecturaRepository;
        this.repository = repository;
        this.service = service;
    }

    async handle(command) {

        const criteria = new Criteria();
        criteria.where('id', command.id);
        const usuario = await this.usuarioLecturaRepository.getEntity(criteria);
        console.log(usuario);
        return;
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