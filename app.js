var config = require('./config');
var express = require('express');
var app = express();

app.use(express.static(config.public_dir));

app.listen(config.port, function() {
  console.log('Server is listening on port %d', config.port);
});
