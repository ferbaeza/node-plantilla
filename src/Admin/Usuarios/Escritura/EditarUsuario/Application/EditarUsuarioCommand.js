export class EditarUsuarioCommand {
    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}