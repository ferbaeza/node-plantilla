import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuarioFichaRepositoryInterface } from '../Domain/Interfaces/UsuarioFichaRepositoryInterface.js';
import { findOne } from '../../../../../Shared/Database/Database.js';


export class UsuarioFichaRepository extends UsuarioFichaRepositoryInterface {

    TABLE = 'usuarios';

    async findOne(especification){
        try {
            const usuario =  await findOne(this.TABLE, {id: especification.id});
            if (!usuario) {
                return false;
            }
            return this.usuarioDaoEntity(usuario);

        } catch (error) {
            console.log(error);
        }
    }

    usuarioDaoEntity(data){
        return UsuarioDaoEntity.fromRepository(data);
    }
}



