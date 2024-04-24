export class CrearProyectoCommand {
    constructor(titulo, descripcion, puntuacion, url, usuarioId) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion ?? 0;
        this.url = url ?? "";
        this.usuarioId = usuarioId;
    }
}