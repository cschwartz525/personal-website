function resume(req, res) {
  var resume = require('../db/resume');
  res.json(resume);
}

module.exports = {
  resume: resume
}
