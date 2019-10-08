const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const app = express();

mongoose.connect('mongodb://omni:omni@aircnc-shard-00-00-9kjqs.mongodb.net:27017,aircnc-shard-00-01-9kjqs.mongodb.net:27017,aircnc-shard-00-02-9kjqs.mongodb.net:27017/aircnc?ssl=true&replicaSet=aircnc-shard-0&authSource=admin&retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET,POST,PUT,DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição,delete )
// req.body = Acessar corpo da requisição (para criação, edição)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(process.env.PORT || 3333);