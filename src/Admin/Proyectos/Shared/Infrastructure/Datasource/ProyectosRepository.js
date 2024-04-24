// import { ProyectosModel } from '../../../../../Shared/Squelize/Proyectos/ProyectosModel.js';
import { ProyectosRepositoryInterface } from '../../Domain/ProyectosRepositoryInterface.js';
import { ProyectoDaoEntity } from '../../../../../Shared/Dao/Proyectos/ProyectoDaoEntity.js';
// import { UsuariosProyectosModel } from '../../../../../Shared/Squelize/UsuariosProyectos/UsuariosProyectosModel.js';
// import { UsuariosModel } from '../../../../../Shared/Squelize/Usuarios/UsuariosModel.js';
import { ProyectosNoEncontradoException } from '../../../../../Shared/Utils/Exceptions/ProyectosExceptions.js';

export class ProyectosRepository extends ProyectosRepositoryInterface {

    async save(entidad) {
        try {
            const nuevoProyecto = await ProyectosModel.create(
                {
                    id: entidad.id,
                    titulo: entidad.titulo,
                    descripcion: entidad.descripcion ?? "",
                    puntuacion: entidad.puntuacion ?? 0,
                    url: entidad.url ?? "",
                    usuario_id: entidad.usuarioId
                }
            );
            const proyectoId = nuevoProyecto.id;
            const relacion = await this.guardarProyectoUsuario(entidad.usuarioId, proyectoId);

            return this.returnProyectoDaoEntity(nuevoProyecto);
        } catch (error) {
            console.log(error);
        }
    }

    async guardarProyectoUsuario(usuarioId, proyectoId) {
        try {
            // await UsuariosProyectosModel.create(
            //     {
            //         usuario_id: usuarioId,
            //         proyecto_id: proyectoId,
            //     }
            // );
            // const usuario = await UsuariosModel.findByPk(usuarioId);

            // if (usuario) {
            //     await usuario.addProyecto(proyecto_id);
            // } else {
            // }

        } catch (error) {
            console.log(error);
        }
    }

    async findByPk(id) {
        try {
            const proyecto = await ProyectosModel.findOne({ where: { id: id } });
            if (!proyecto) {
                throw new ProyectosNoEncontradoException();
            }
        } catch (error) {
            console.log(error);
        }
    }

    async findAll() {
        try {
            const proyectos = await ProyectosModel.findAll();
            return proyectos.map(proyecto => this.returnProyectoDaoEntity(proyecto));

        } catch (error) {
            console.log(error);
        }
    }

    returnProyectoDaoEntity(data){
        return ProyectoDaoEntity.fromRepository(data);
    }
}



