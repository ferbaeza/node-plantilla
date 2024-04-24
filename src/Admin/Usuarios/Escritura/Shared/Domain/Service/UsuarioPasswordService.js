import bcrypt from 'bcrypt';

export const verificarPasswordUsuario = async (usuario, password) => {
    return await bcrypt.compare(password, usuario.password);
}