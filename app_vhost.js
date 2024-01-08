const express = require('express');
const vhost = require('vhost');

const app1 = express();
// Configure app1

const app2 = express();
// Configure app2

const mainApp = express();

mainApp.use(vhost('app1.example.com', app1));
mainApp.use(vhost('app2.example.com', app2));

mainApp.listen(3000, () => {
  console.log('Server is running on port 3000');
});

