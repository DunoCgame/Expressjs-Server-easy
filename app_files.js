let express = require("express");
let app = express();
let path = require('path');
const port = 3000;

//const routes = require('./routes/routers.js');


// db settings

// settings
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'views')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
