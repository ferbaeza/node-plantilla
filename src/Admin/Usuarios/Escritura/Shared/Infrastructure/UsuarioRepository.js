import { ApiResponse } from '../../../../../Shared/Utils/Response/ApiResponse.js';
import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuarioEscrituraRepositoryInterface } from '../Domain/Interfaces/UsuarioEscrituraRepositoryInterface.js';
// import { insert } from '../../../../../Shared/Database/Builder/SqlBuilder.js';

export class UsuarioEscrituraRepository extends UsuarioEscrituraRepositoryInterface {

    TABLE = 'usuarios';

    async save(registroUsuario){
        try {
            // Guarda el usuario en la base de datos
            const usuarioRegistrado = await insert(this.TABLE, registroUsuario);
            return this.usuarioDaoEntity(usuarioRegistrado);

        } catch (error) {
            ApiResponse.Error([], error);
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



