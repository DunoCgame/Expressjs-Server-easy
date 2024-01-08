let express = require("express");
let app = express();
let path = require('path');
const port = 3000;

const routes = require('./routes/routers.js');


// db settings

// settings
app.set('port', process.env.PORT || 3000);

// middlewares

// Usar el enrutador en la ruta '/views'
app.use('/', routes);

app.use('/about', routes);

app.use('/contact', routes);

app.use('/data', routes);

app.use('/users/:id', routes);

app.use('/users', routes);

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
