var React = require('react');

var EmailForm = React.createClass({
  displayName: 'EmailForm',
  render: function() {
    var emailRegex = "^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.(com|org|net|edu|info|int|gov|mil|[a-z]{2}|co.[a-z]{2})$";
    return (
      <div id="emailForm">
        <form
            action="/api/sendEmail"
            encType="application/json"
            method="post"
        >
          <input
              className="formText"
              name="sender"
              pattern={emailRegex}
              placeholder="Your email"
              size="50"
              type="text"
          />
          <br />
          <input
              className="formText"
              name="subject"
              placeholder="Subject"
              size="50"
              type="text"
          />
          <br />
          <textarea
              className="formText"
              cols="100"
              name="message"
              rows="20"
          />
          <br />
          <input className="formButton" type="submit" value="Send" />
          <input className="formButton" type="reset" value="Reset" />
        </form>
      </div>
    );
  }
});

module.exports = EmailForm;
