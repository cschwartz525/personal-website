var React = require('react');

var EmailForm = React.createClass({
  render: function() {
    return (
      <div id="emailForm">
        <form
            action="/api/sendEmail"
            enctype="text/plain"
            method="post"
        >
          <input
              className="formText"
              name="sender"
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
