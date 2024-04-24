import { Server } from './src/Shared/Server/Server.js'

const app =()=>{
    new Server().startServer();
}
app();