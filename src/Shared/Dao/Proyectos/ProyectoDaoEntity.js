export class ProyectoDaoEntity {
    constructor(
        id,
        titulo, 
        descripcion,
        puntuacion,
        url,
        usuarioId
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
        this.url = url;
        this.usuarioId = usuarioId;
    }

    static fromRepository(model) {
        return new ProyectoDaoEntity(
            model.id, 
            model.titulo, 
            model.descripcion, 
            model.puntuacion ?? 0,
            model.url ?? "",
            model.usuario_id
        );
    }
}