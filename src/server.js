const express = require('express'); 
const routes = require('./routes');
const cors = require('cors');
const axios = require('axios');

require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(cors());


app.listen((3333), () => {
    console.log('API rodando...')
});