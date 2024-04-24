import { ProyectoEntity } from '../Domain/Entity/ProyectoEntity.js';


export class CrearProyectoCommandHandler {
    constructor(repository) {
        this.repository = repository;
    }

    async handle(command) {
        const proyectoEntity = ProyectoEntity.fromCommand(command);
        return await this.repository.save(proyectoEntity);
    }
}