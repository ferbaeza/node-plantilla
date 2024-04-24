export class ListarProyectosCommandHandler {

    constructor(repository){
        this.repository = repository;
    }

    async handle() {
        return await this.repository.findAll();
    }
}