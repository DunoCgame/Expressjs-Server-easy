var express = require('express');
var router = express.Router();

/*my rutas*/

// define the home page route
router.get('/', function(req, res) {
 // Establecer el código de estado como 200 (OK) y enviarlo como respuesta
 // res.sendStatus(200);
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});


router.get('/data', (req, res) => {
  // Aquí es donde generas o obtienes los datos que deseas enviar como JSON
  const data = {
    message: 'Hola desde el servidor!',
    timestamp: new Date()
  };

  // Envía los datos como JSON
  res.json(data);
});

/****parametros por url**/
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Hacer algo con el userId
  res.send('Usuario ID: ' + userId);
});


/*
http://localhost:3000/users/123
*/

/*---------------------------------*/
router.get('/users', (req, res) => {
  const userId = req.query.id;
  // Hacer algo con el userId
  res.send('Usuario ID: ' + userId);
});

/*
http://localhost:3000/users?id=123
*/
// define the about route
router.get('/contact', function(req, res) {
  res.send('contact');
});
/*******************************************/

router.route('/book')
  .get(function(req, res) {
    res.send('Obtener un libro aleatorio');
  })
  .post(function(req, res) {
    res.send('Agregar un libro');
  })
  .put(function(req, res) {
    res.send('Actualizar el libro');
  });


module.exports = router;
