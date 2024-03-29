import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";


const server = new Server();

// * Body Parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// * CORS
server.app.use( cors( {} ) )

// * Rutas de servicios
server.app.use( '/', router )

server.start( () => {
    console.log(`Listening on port ${ server.port }`);
} )
