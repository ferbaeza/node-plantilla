import { BaseRepository } from '../../../../../Shared/Base/BaseRepository.js';
import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuariosListado } from '../../Listado/Domain/Entity/UsuariosListado.js';
import { UsuarioLecturaRepositoryInterface } from '../Domain/Interfaces/UsuarioLecturaRepositoryInterface.js';

export class UsuarioLecturaRepository extends UsuarioLecturaRepositoryInterface {

    constructor() {
        super();
        this.repository = new BaseRepository('usuarios');
    }

    async getCollection(criteria) {
        const usuarios = await this.repository.getBaseCollection(criteria);
        return usuarios.map(usuario => this.usuarioListadoEntity(usuario));
    }

    async getEntity(criteria) {
        // console.log(criteria, 19);
        const usuario = await this.repository.getBaseEntity(criteria);
        if (usuario.length === 0) {
            return null;
        }
        return usuario.map(usuario => this.usuarioDaoEntity(usuario));
    }

    usuarioListadoEntity(data) {
        return UsuariosListado.fromRepository(data);
    }

    usuarioDaoEntity(data) {
        return UsuarioDaoEntity.fromRepository(data);
    }
}



