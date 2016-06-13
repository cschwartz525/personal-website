var config = require('./config');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var apiController = require('./controllers/api');

app.use(express.static(config.public_dir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/about', apiController.about);
app.get('/api/resume', apiController.resume);
app.get('/api/social', apiController.social);
app.post('/api/sendEmail', apiController.sendEmail);

app.listen(config.port, function() {
  console.log('Server is listening on port %d', config.port);
});
