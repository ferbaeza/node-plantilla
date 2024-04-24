export class RegistrarUsuarioCommand{
    constructor(id, nombre, email, password){
        this.id = id ?? null;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}