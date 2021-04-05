var express = require('express');
var router = express.Router();

//my rutas

// router.get('/', (req, res) => {
  // res.send('Hello World!')
// })

// router.get('/about', function (req, res) {
  // res.send('About!')
// })

// router.get('/contact', function (req, res) {
  // res.send('Contact!')
// })

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'about Page' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});




module.exports = router;
