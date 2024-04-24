import uuid4 from 'uuid4'



export class ProyectoEntity {

    constructor(id, titulo, descripcion, puntuacion, url, usuarioId) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion ?? 0;
        this.url = url ?? "";
        this.usuarioId = usuarioId;
    }

    static fromCommand(command) {
        const id = command.id ?? uuid4();
        return new ProyectoEntity(id, command.titulo, command.descripcion, command.puntuacion, command.url, command.usuarioId);
    }
}