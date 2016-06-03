var React = require('react');
var EmailForm = require('./emailForm');

var ContactPage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Contact</h1>

        <h2 className="pageSubtitle">Contact Me</h2>
        <div className="pageContent">
          <EmailForm />
        </div>

        <h2 className="pageSubtitle">Additional Contact Info</h2>
        <div className="pageContent">
          <div id="contactList">
            <div className="contactItem"><b>Email:</b> <a href="mailto:craigschwartz525@gmail.com">craigschwartz525@gmail.com</a></div>
            <div className="contactItem"><b>Phone:</b> <a href="tel:914-373-1348">914-373-1348</a></div>
            <div className="contactItem"><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/cschwartz525">cschwartz525</a></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactPage;
