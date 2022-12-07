const express = require('express');
const {getConnection} =require('./db/db-connection-mongo');
const cors = require('cors');
const UsuarioRoute = require('./router/usuario');
const AuthRoute = require('./router/auth');

require('dotenv').config();


const app = express();
const port = process.env.PORT;

app.use(cors());

getConnection();  

app.use(express.json());


app.use('/usuario', UsuarioRoute);
app.use('/login', AuthRoute);
app.use('/usuario', require('./router/usuario'));
app.use('/estado-equipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-equipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});