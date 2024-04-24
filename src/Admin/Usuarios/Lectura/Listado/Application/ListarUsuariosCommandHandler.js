export class ListarUsuariosCommandHandler{

    constructor(repository){
        this.repository = repository;
    }
    async handle(){
        const usuarios = await this.repository.findAll();
        const totalUsuarios = usuarios.length;
        return {usuarios, totalUsuarios};
    }
}