export class UsuariosListado {

    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    static fromRepository(repo) {
        return new UsuariosListado(repo.id, repo.nombre, repo.email);
    }
}