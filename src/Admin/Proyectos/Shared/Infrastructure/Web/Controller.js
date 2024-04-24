import { ApiResponse } from '../../../../../Shared/Utils/Response/ApiResponse.js';
import { UsuarioYaExisteException, UsuarioPasswordErroneoException } from '../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js';
import { CrearProyectoCommand } from '../../../Escritura/Application/CrearProyectoCommand.js';
import { CrearProyectoService } from '../../../Escritura/Domain/Service/CrearProyectoService.js';
import { CrearProyectoCommandHandler } from '../../../Escritura/Application/CrearProyectoCommandHandler.js';
import { ListarProyectosCommandHandler } from '../../../Lectura/ListarProyectos/ListarProyectosCommandHandler.js';

export class ProyectoController {
    constructor(repository) {
        //repository
        this.repository = repository;
        //usecases
        this.listarProyectosCommandHandler = new ListarProyectosCommandHandler(this.repository);
        this.crearProyectoCommandHandler = new CrearProyectoCommandHandler(this.repository);
    }

    listarProyectos = async (req, res) => {
        try {
            const data = await this.listarProyectosCommandHandler.handle();
            ApiResponse.Ok(res, data, "listar Proyectos");
            
        } catch (error) {
            if (error instanceof UsuarioPasswordErroneoException) {
                ApiResponse.Error(res, error, 'Contraseña Incorrecta');
            }
        }
    };

    crearProyecto = async (req, res) => {
        try {
            const { titulo, descripcion, puntuacion, url, usuarioId } = req.body;
            const command = new CrearProyectoCommand(titulo, descripcion, puntuacion, url, usuarioId);
            const data = await this.crearProyectoCommandHandler.handle(command);
            ApiResponse.Ok(res, data, `Proyecto ${data.id} guardado Correctamente`);

        } catch (error) {
            if (error instanceof UsuarioYaExisteException) {
                ApiResponse.Error(res, error, 'Usuario ya existe');
            }
        }
    };
}



