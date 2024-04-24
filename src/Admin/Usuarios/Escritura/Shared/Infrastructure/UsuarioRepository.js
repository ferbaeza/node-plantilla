import { ApiResponse } from '../../../../../Shared/Utils/Response/ApiResponse.js';
import { UsuarioDaoEntity } from '../../../../../Shared/Dao/Usuarios/UsuarioDaoEntity.js';
import { UsuarioEscrituraRepositoryInterface } from '../Domain/Interfaces/UsuarioEscrituraRepositoryInterface.js';
import Usuario  from '../../../../../Shared/Database/Entities/Usuario.js';
import { connection } from '../../../../../Shared/Database/DatabaseConnection.js';
import { getRepository } from "typeorm";

export class UsuarioEscrituraRepository extends UsuarioEscrituraRepositoryInterface {

    async save(command){
        try {
            // Aquí puedes realizar operaciones con la base de datos
            // Por ejemplo, crear un nuevo usuario
            // nuevoUsuario.nombre = command.nombre;
            // nuevoUsuario.email = command.email;
            // nuevoUsuario.password = command.password;
            const db = await connection();
            const repo = connection.getRepository(Usuario)
            console.log('db', repo);
            console.log('db', repo);
            console.log('db', repo);
            console.log('db', repo);
            console.log('db', repo);
            console.log('db', repo);
            console.log('db', repo);
            const nuevoUsuario = new Usuario();
            nuevoUsuario.id = command.id;
            console.log('nuevoUsuario', nuevoUsuario);

            const usuarioRepository = getRepository(Usuario);

            // Guarda el usuario en la base de datos
            const usuarioRegistrado = await usuarioRepository.save(nuevoUsuario);

            console.log('Usuario creado:', usuarioRegistrado);


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



