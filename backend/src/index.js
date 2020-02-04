const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://rafaeldeghi:rafaeldeghi@cluster0-p31rd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

//Métodos http: GET(listar, procurar), POST(criar), PUT(editar um recurso), DELETE

//Tipos de parametros:
//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Route Params: req.params (Identificar um recurso na alteração ou na remoção)
//Body: Request.body (dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)



app.listen(3334);