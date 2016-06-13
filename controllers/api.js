var nodemailer = require('nodemailer');
var config = require('../config');

function about(req, res) {
  var about = require('../db/about');
  res.json(about);
}

function resume(req, res) {
  var resume = require('../db/resume');
  res.json(resume);
}

function sendEmail(req, res) {
  var transporter = nodemailer.createTransport(config.smtpConfig);

  var mailOptions = {
    from: req.body.sender,
    to: config.email_address,
    subject: 'New email sent from personal website form',
    text: `Subject: ${req.body.subject}\nFrom: ${req.body.sender}\nMessage: ${req.body.message}`
  }

  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          return console.log(error);
          res.write('<h1>Error sending email</h1><a href="/">Back</a>');
      }
      console.log('Message sent: ' + info.response);
      res.write('<h1>Email sent successfully</h1><a href="/">Back</a>');
  });
}

function social(req, res) {
  var social = require('../db/social');
  res.json(social);
}

module.exports = {
  about: about,
  resume: resume,
  sendEmail: sendEmail,
  social: social
}
