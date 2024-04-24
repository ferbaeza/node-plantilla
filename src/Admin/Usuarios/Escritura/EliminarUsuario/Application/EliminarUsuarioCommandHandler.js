import { UsuarioIdNOExisteException } from "../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js";

export class EliminarUsuarioCommandHandler{
    constructor(repository) {
        this.repository = repository;
    }
    async handle(command) {
        const idUsuario = command.id;
        const isDeleted = await this.repository.delete(idUsuario);
        if (!isDeleted) {
            throw new UsuarioIdNOExisteException();
        }
        if (isDeleted) {
            return { isDeleted, idUsuario};
        }
    }
}