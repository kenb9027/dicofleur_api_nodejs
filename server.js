require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');
const HttpStatus = require("./utils/httpStatus.utils.js");
const Response = require("./utils/response.utils.js");

/**
 * PORT
 */
const normalizePort = val => {
    const normalizedPort = parseInt(val, 10);
  
    if (isNaN(normalizedPort)) {
      return val;
    }
    if (normalizedPort >= 0) {
      return normalizedPort;
    }
    return false;
  };
const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);



const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
};
  


/**
 * ROUTES IMPORTATION
 */
const trefleRoutes = require("./routes/trefle.routes.js");
const usersRoutes = require("./routes/user.routes.js");

// database connection
require("./config/config.js");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * ROUTES
 */
app.use("/api/trefle", trefleRoutes);
app.use("/api/users", usersRoutes);
app.get("/", (req, res) =>
    res.send(
        new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.message,
            `Welcome to the Dicofleur's API, v1.0.0`
        )
    )
);
app.all("*", (req, res) =>
    res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
            new Response(
                HttpStatus.NOT_FOUND.code,
                HttpStatus.NOT_FOUND.message,
                `This route does not exist`
            )
        )
);



const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe: ' + address : 'port: ' + PORT;
    console.log('Listening on ' + bind);
});


// server running status
server.listen(PORT, () => {
    //   eslint-disable-next-line no-console
    console.info(`The app listening at http://localhost:${PORT}`);
});
