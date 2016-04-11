function resume(req, res) {
  var resume = require('../db/resume');
  res.json(resume);
}

function social(req, res) {
  var social = require('../db/social');
  res.json(social);
}

module.exports = {
  resume: resume,
  social: social
}
