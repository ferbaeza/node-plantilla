export class Usuario {

    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
    }

    static fromCommand(command) {
        return new Usuario(command.nombre, command.email);
    }
}