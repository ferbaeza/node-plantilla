export class CrearProyectoService {
    constructor(proyectoRepository) {
        this.proyectoRepository = proyectoRepository;
    }
    async run(proyecto) {
        return await this.proyectoRepository.save(proyecto);
    }
}