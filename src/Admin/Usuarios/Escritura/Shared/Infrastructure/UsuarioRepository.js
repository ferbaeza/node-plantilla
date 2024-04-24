import { ApiResponse } from '../../../../../Shared/Utils/Response/ApiResponse.js';
import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuarioEscrituraRepositoryInterface } from '../Domain/Interfaces/UsuarioEscrituraRepositoryInterface.js';
import { Usuario } from '../../../../../Shared/Database/Entities/Usuarios/Usuario.js';

export class UsuarioEscrituraRepository extends UsuarioEscrituraRepositoryInterface {

    async save(command){
        try {
            // Aquí puedes realizar operaciones con la base de datos
            // Por ejemplo, crear un nuevo usuario
            const nuevoUsuario = new Usuario();
            nuevoUsuario.nombre = 'John Doe';
            nuevoUsuario.email = 'john@example.com';
            await connection.manager.save(nuevoUsuario);

            console.log('Usuario creado:', nuevoUsuario);

            return this.usuarioDaoEntity(usuarioRegistrado);
        } catch (error) {
            ApiResponse.Error([], error);
        }
    }

    async findByEmail(email){
        try {
            const data = await UsuariosModel.findOne({where: {email: email}});
            if(data){
                return this.usuarioDaoEntity(data);
            }
            return false;

        } catch (error) {
            console.log(error);
        }
    }

    async findAll(){
        try {
            const usuarios =  await UsuariosModel.findAll();
            return usuarios.map(usuario => this.usuarioDaoEntity(usuario));

        } catch (error) {
            console.log(error);
        }
    }

    async findOne(especification){
        try {
            const usuario =  await UsuariosModel.findOne({where: especification});
            if (!usuario) {
                return false;
            }
            return this.usuarioDaoEntity(usuario);

        } catch (error) {
            console.log(error);
        }
    }

    async update(entidad){
        try {
            const id = entidad.id;
            const usuario =  await UsuariosModel.findOne({where: {id}});
            if(!usuario){
                return false;
            }
            const usuarioActualizado = usuario.set(entidad);
            usuarioActualizado.save();
            return this.usuarioDaoEntity(usuarioActualizado);

        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const usuario = await UsuariosModel.findOne({ where: { id } });
            usuario.destroy();
            return true;

        } catch (error) {
            console.log(error);
        }
    }

    usuarioDaoEntity(data){
        return UsuarioDaoEntity.fromRepository(data);
    }
}



