var React = require('react');

var EmailForm = React.createClass({
  render: function() {
    return (
      <div className="pageContent" id="emailForm">
        <h2>Contact Me</h2>
        <form
            action="/api/sendEmail"
            method="post"
            enctype="text/plain"
        >
          <input
              type="text"
              name="sender"
              placeholder="Your email"
          />
          <br />
          <input
              type="text"
              name="subject"
              placeholder="Subject"
          />
          <br />
          <textarea
              cols="100"
              name="message"
              placeholder="..."
              rows="20"
          />
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form>
      </div>
    );
  }
});

module.exports = EmailForm;
