import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuarioLecturaRepositoryInterface } from '../Domain/Interfaces/UsuarioLecturaRepositoryInterface.js';
import { getAll } from '../../../../../Shared/Database/Database.js';

export class UsuarioLecturaRepository extends UsuarioLecturaRepositoryInterface{

    TABLE = 'usuarios';

    async findAll(){
        try {
            const usuarios = await getAll(this.TABLE);
            return usuarios.map(usuario => this.usuarioDaoEntity(usuario));
            
        } catch (error) {
            console.log(error);
        }
    }

    usuarioDaoEntity(data){
        return UsuarioDaoEntity.fromRepository(data);
    }
}



