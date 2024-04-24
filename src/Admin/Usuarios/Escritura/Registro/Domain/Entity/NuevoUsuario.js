import bcrypt from 'bcrypt';
import uuid4 from 'uuid4'



export class NuevoUsuario {

    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    static fromCommand(command) {
        const password = bcrypt.hashSync(command.password, 10);
        let id = command.id;
        if (id == null){
            console.log("id null", command.id);
            id = uuid4();
        }
        return new NuevoUsuario(id, command.nombre, command.email, password);
    }
}