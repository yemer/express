const express = require('express');
const homeRouter = 
        require('./app/routes/home.route');
// creamos nuestro server
const app = express();

// Establecemos jade como lenaguaje de plantillas
app.set('view engine', 'jade');
app.set('views', './app/views')

app.use('/static', express.static('static'));
// rutas base
app.use('/', homeRouter);


//Ponemos al servidor a escuchar el puerto
app.listen(8080, function(){
    console.log('Servidor iniciado.');
});
