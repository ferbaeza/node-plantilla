import { Criteria } from "../../../../../../Shared/Criteria/Criteria.js";

export class EmailUsuarioExisteService {
    constructor(repository) {
        this.repository = repository;
    }

    async comprobar(email){

        const criteria = new Criteria();
        criteria.where('email', email);
        const existeUsuario = await this.repository.getEntity(criteria);

        if (existeUsuario) {
            return true;
        }
        return false;
    }

    verificarEmailUsuario = async (usuarioEditado, usuarios) => {
        return usuarios.some(usuario => usuario.email === usuarioEditado.email && usuario.id !== usuarioEditado.id);
    }
}