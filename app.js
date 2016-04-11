var config = require('./config');
var express = require('express');
var app = express();

var apiController = require('./controllers/api');

app.use(express.static(config.public_dir));

app.get('/api/resume', apiController.resume);
app.get('/api/social', apiController.social);

app.listen(config.port, function() {
  console.log('Server is listening on port %d', config.port);
});
