var React = require('react');
var EmailForm = require('./emailForm');

var ContactPage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Contact</h1>
        <EmailForm />
        <div id="contactList">
          <div className="contactItem"><a href="mailto:craigschwartz525@gmail.com">craigschwartz525@gmail.com</a></div>
          <div className="contactItem">914-373-1348</div>
        </div>
      </div>
    );
  }
});

module.exports = ContactPage;
