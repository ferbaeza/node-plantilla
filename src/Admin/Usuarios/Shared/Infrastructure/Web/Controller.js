import { LoginCommand } from '../../../Login/Application/LoginCommand.js';
import { ApiResponse } from '../../../../../Shared/Utils/Response/ApiResponse.js';
import { EliminarUsuarioCommand } from '../../../Escritura/EliminarUsuario/Application/EliminarUsuarioCommand.js';
import { CrearUsuarioCommand } from '../../../Escritura/CrearUsuario/Application/CrearUsuarioCommand.js';
import { FichaUsuarioCommand } from '../../../Lectura/FichaUsuario/Application/FichaUsuarioCommand.js';
import { UsuarioYaExisteException, UsuarioPasswordErroneoException, 
    UsuarioNOExisteException, UsuarioIdNOExiste, 
    UsuarioIdNOExisteException, UsuarioYaExiste,
    UsuarioPasswordErroneo,
    NOExistenUsuarios,
    NOExistenUsuariosException,
    UsuariosEmailYaExiste,
    UsuariosEmailYaExisteException
} from '../../../../../Shared/Utils/Exceptions/UsuariosExceptions.js';
import { EditarUsuarioCommand } from '../../../Escritura/EditarUsuario/Application/EditarUsuarioCommand.js';

export class UsuarioController {

    constructor(
        crearUsuarioCommandHandler, 
        listarUsuariosCommandHandler,
        fichaUsuarioCommandHandler,
        editarUsuarioCommandHandler
    ) {
        this.crearUsuarioCommandHandler = crearUsuarioCommandHandler;
        this.listarUsuariosCommandHandler = listarUsuariosCommandHandler;
        this.fichaUsuarioCommandHandler = fichaUsuarioCommandHandler;
        this.editarUsuarioCommandHandler = editarUsuarioCommandHandler;

    }

    listarUsuarios = async (req, res) => {
        try {
            const data = await this.listarUsuariosCommandHandler.handle();
            ApiResponse.Ok(res, data, "getAll");
        
        } catch (error) {
            if (error instanceof UsuarioPasswordErroneoException) {
                ApiResponse.Error(res, error, UsuarioPasswordErroneo);
            }
        }
    }

    fichaUsuario = async (req, res) => {
        try {
            const {id } = req.params;
            const command = new FichaUsuarioCommand(id);
            const data = await this.fichaUsuarioCommandHandler.handle(command);
            ApiResponse.Ok(res, data, "fichaUsuario");
            
        } catch (error) {
            if (error instanceof UsuarioIdNOExisteException) {
                ApiResponse.Error(res, error, UsuarioIdNOExiste);
            }
        }
    };

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const datosLogin = new LoginCommand(email, password);
            const data = await this.loginCommandHandler.handle(datosLogin);
            ApiResponse.Ok(res, data, "Login");
            
        } catch (error) {
            if (error instanceof UsuarioPasswordErroneoException) {
                ApiResponse.Error(res, error, UsuarioPasswordErroneo);
            }
            if (error instanceof UsuarioNOExisteException) {
                ApiResponse.Error(res, error, UsuarioNOExisteException);
            }

        }
    };

    registrarUsuario = async (req, res) => {
        try {
            const {id, nombre, email, password } = req.body;
            const command = new CrearUsuarioCommand(id, nombre, email, password);

            const usuarioRegistrado = await this.crearUsuarioCommandHandler.handle(command);
            ApiResponse.Ok(res, usuarioRegistrado, `Usuario ${usuarioRegistrado.email} Registrado Correctamente`);
            
        } catch (error) {
            if (error instanceof UsuarioYaExisteException) {
                ApiResponse.Error(res, error, UsuarioYaExiste);
            }
        }
    };

    modificarUsuario = async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, email, password } = req.body;
            const command = new EditarUsuarioCommand(id, nombre, email, password);
            const data = await this.editarUsuarioCommandHandler.handle(command);

            ApiResponse.Ok(res, data, `Usuario ${id} Modificado Correctamente`);
        } catch (error) {
            if (error instanceof NOExistenUsuariosException) {
                ApiResponse.Error(res, error, NOExistenUsuarios);
            }
            if (error instanceof UsuarioIdNOExisteException) {
                ApiResponse.Error(res, error, UsuarioIdNOExiste);
            }
            if (error instanceof UsuariosEmailYaExisteException) {
                ApiResponse.Error(res, error, UsuariosEmailYaExiste);
            }
        }
    };
    
    borrarUsuario = async (req, res) => {
        try {
            const {id } = req.params;
            const command = new EliminarUsuarioCommand(id);
            const data = await this.eliminarUsuarioCommandHandler.handle(command);
            ApiResponse.Ok(res, data, `Usuario ${id} Eliminado Correctamente`);
            
        } catch (error) {
            if (error instanceof UsuarioIdNOExisteException) {
                ApiResponse.Error(res, error, UsuarioIdNOExiste);
            }
        }
    };
    
        // listarProyectosUsuario = async (req, res) => {
        //     try {
        //         const {id } = req.params;
        //         const command = new FichaUsuarioCommand(id);
        //         const data = await FichaProyectoUsuarioCommandHandler.handle(command);
        //         ApiResponse.Ok(res, data, "fichaUsuario");
                
        //     } catch (error) {
        //         if (error instanceof UsuarioPasswordErroneoException) {
        //             ApiResponse.Error(res, error, 'Contraseña Incorrecta');
        //         }
        //     }
        // };
    
}
