export class ProyectosRepositoryInterface{
    async save(entidad){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED ->' + entidad);
    }

    async findAll() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async findByPk(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED -> ' + id);
    }

    async guardarProyectoUsuario(usuarioId, proyectoId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED -> ' + usuarioId + ' ' + proyectoId);
    }
}