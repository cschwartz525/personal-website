var React = require('react');

var EmailForm = React.createClass({
  displayName: 'EmailForm',
  render: function() {
    return (
      <div id="email-form">
        <form
            action="/api/sendEmail"
            encType="application/json"
            method="post"
        >
          <input
              className="form-text-field"
              id="contact-form-email"
              name="sender"
              placeholder="Your email"
              size="50"
              type="text"
          />
          <br />
          <input
              className="form-text-field"
              name="subject"
              placeholder="Subject"
              size="50"
              type="text"
          />
          <br />
          <textarea
              className="form-text-field"
              cols="100"
              name="message"
              rows="20"
          />
          <br />
          <input className="form-button" disabled id="contact-form-submit" type="submit" value="Send" />
          <input className="form-button" type="reset" value="Reset" />
        </form>
      </div>
    );
  }
});

module.exports = EmailForm;
