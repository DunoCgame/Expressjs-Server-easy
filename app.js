let express = require("express");
var session = require('express-session');
let app = express();
let path = require('path');
const port = 3000;

// const routes = require('./routes/routers.js');


// db settings

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

// app.use( session( {
  // /* Aquí irían los atributos de nuestra sesión, como claves,
   // * cómo se guarda, tiempo de expiración, etc...
   // */
   
   // console.log("hola");
   
// }));

// var auth = function(req, res, next) {
  // // if (req.session && req.session.user === "jose" && req.session.admin)
    // // return next();
  // // else
    // // return res.sendStatus(401);
// };

// app.get('/login', function (req, res) {
  // if (!req.query.username || !req.query.password) {
    // res.send('login failed');
  // } else if(req.query.username === "jose" || req.query.password === "hunter2") {
    // req.session.user = "jose";
    // req.session.admin = true;
  // }
// });



// app.get('/content', auth, function (req, res) {
    // res.send("You can only see this after you've logged in.");
// });


app.get('/login', function (req, res) {
  // req.session.destroy();
  res.send("login");
  
});




// routes

// app.use(routes);
app.use(require('./routes/routers.js'));

// app.use(require('routes'));
// app.use('/about', about)
// app.use('/contact', contact)

// app.get('/', (req, res) => {
  // res.send('Hello World!')
// })

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next();
})




// static files

// app.use('/', express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')));


// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
