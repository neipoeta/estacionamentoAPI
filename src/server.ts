import app from './app'

require('./database');


app.listen((3333), () => {
    console.log('API rodando...')
});
