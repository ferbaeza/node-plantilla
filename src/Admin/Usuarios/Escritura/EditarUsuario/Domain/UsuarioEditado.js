import bcrypt from 'bcrypt';

export class UsuarioEditado {
    constructor(
        id,
        nombre,
        email,
        password,
    ) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    static fromCommand(command, usuarioDaoEntity) {
        const password = bcrypt.hashSync(command.password, 10);
        
        return new UsuarioEditado(
            command.id,
            command.nombre ?? usuarioDaoEntity.nombre,
            command.email  ?? usuarioDaoEntity.email,
            password ?? usuarioDaoEntity.password,
        );
    }
}