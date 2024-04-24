
export class UsuarioService {
    constructor(repository) {
        this.repository = repository;
    }
    comprobar = async (email) => {
        console.log('comprobar', email);
        const existeUsuario = await this.repository.findByEmail(email);
        console.log("existeUsuario", existeUsuario);
        if (existeUsuario) {
            return true;
        }
    }

    verificarEmailUsuario = async (usuarioEditado, usuarios) => {
        return usuarios.some(usuario => usuario.email === usuarioEditado.email && usuario.id !== usuarioEditado.id);
    }
}