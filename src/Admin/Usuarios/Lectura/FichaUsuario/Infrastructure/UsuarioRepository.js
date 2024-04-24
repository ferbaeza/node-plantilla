import { ApiResponse } from '../../../../../Shared/Utils/Response/ApiResponse.js';
// import { UsuariosModel } from '../../../../../Shared/Squelize/Usuarios/UsuariosModel.js';
import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuarioRepositoryInterface } from '../../../Lectura/Listado/Domain/Interfaces/UsuarioRepositoryInterface.js';

export class UsuarioRepository extends UsuarioRepositoryInterface{

    async save(command){
        try {
            const usuarioRegistrado = await UsuariosModel.create(
                {
                    id : command.id,
                    nombre: command.nombre,
                    email: command.email,
                    password: command.password,
                }
            );
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



