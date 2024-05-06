import { Criteria } from "../../../../../Shared/Criteria/Criteria.js";

export class ListarUsuariosCommandHandler{

    constructor(repository){
        this.repository = repository;
    }
    async handle(){
        const criteria = new Criteria();
        const usuarios = await this.repository.findAll(criteria);
        const totalUsuarios = usuarios.length;
        return {usuarios, totalUsuarios};
    }
}