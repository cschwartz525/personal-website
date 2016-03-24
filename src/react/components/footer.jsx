var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div id="footer">
        <div id="copyright">
          © 2016 Craig Schwartz
        </div>
        <div className="social-icons">
          <div className="icon icon--soundcloud">
            <a href="https://soundcloud.com/soundcastlemusic">
              <span className="icon__name">Soundcloud</span>
            </a>
          </div>
          <div className="icon icon--instagram">
            <a href="https://www.instagram.com/cschwartz525/">
              <span className="icon__name">Instagram</span>
            </a>
          </div>
          <div className="icon icon--facebook">
            <a href="https://www.facebook.com/cschwartz525">
              <span className="icon__name">Facebook</span>
            </a>
          </div>
          <div className="icon icon--google">
            <a href="https://plus.google.com/u/0/101927703181492899764/posts">
              <span className="icon__name">Google+</span>
            </a>
          </div>
          <div className="icon icon--github">
            <a href="https://github.com/cschwartz525">
              <span className="icon__name">GitHub</span>
            </a>
          </div>
          <div className="icon icon--linkedin">
            <a href="https://www.linkedin.com/in/cschwartz525">
              <span className="icon__name">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
