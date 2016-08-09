var React = require('react');
var EmailForm = require('./emailForm');

var ContactPage = React.createClass({
  displayName: 'ContactPage',
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
            <div className="contactItem"><a className="textLink" href="mailto:craigschwartz525@gmail.com"><i className="fa fa-envelope" /> craigschwartz525@gmail.com</a></div>
            <div className="contactItem"><a className="textLink" href="tel:914-373-1348"><i className="fa fa-phone" /> 914-373-1348</a></div>
            <div className="contactItem"><a className="textLink" href="https://www.linkedin.com/in/cschwartz525"><i className="fa fa-linkedin" /> cschwartz525</a></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactPage;
