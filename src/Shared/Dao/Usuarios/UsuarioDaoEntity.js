export class UsuarioDaoEntity {
    constructor(
        id,
        nombre, 
        email,
        password,
        activo,
        verificado
    ) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.activo = activo;
        this.verificado = verificado;
    }

    static fromRepository(model) {
        return new UsuarioDaoEntity(
            model.id, 
            model.nombre, 
            model.email, 
            model.password, 
            model.activo ?? false, 
            model.verificado ?? false
        );
    }

    setActivoTrue() {
        this.activo = true;
        return this;
    }
}