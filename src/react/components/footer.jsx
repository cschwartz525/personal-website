var React = require('react');

var Footer = React.createClass({
  getInitialState: function() {
    return {
      facebook: '',
      github: '',
      google: '',
      instagram: '',
      linkedin: '',
      soundcloud: '',
      twitter: ''
    };
  },
  componentDidMount: function() {
    $.getJSON('/api/social')
      .done(function(response) {
        this.setState(response);
      }.bind(this))
      .fail(function(err) {
        console.log('Error loading social icons');
      });
  },
  render: function() {
    return (
      <div id="footer">
        <div id="copyright">
          © 2016 Craig Schwartz
        </div>
        <div className="social-icons">
          <div className="icon icon--soundcloud">
            <a href="https://soundcloud.com/soundcastlemusic">
              <svg viewBox="0 0 512 512">
                <path d={this.state.soundcloud}/>
              </svg>
            </a>
          </div>
          <div className="icon icon--instagram">
            <a href="https://www.instagram.com/cschwartz525/">
              <svg viewBox="0 0 512 512">
                <path d={this.state.instagram}/>
              </svg>
            </a>
          </div>
          <div className="icon icon--facebook">
            <a href="https://www.facebook.com/cschwartz525">
              <svg viewBox="0 0 512 512">
                <path d={this.state.facebook}/>
              </svg>
            </a>
          </div>
          <div className="icon icon--google">
            <a href="https://plus.google.com/u/0/101927703181492899764/posts">
              <svg viewBox="0 0 512 512">
                <path d={this.state.google}/>
              </svg>
            </a>
          </div>
          <div className="icon icon--github">
            <a href="https://github.com/cschwartz525">
              <svg viewBox="0 0 512 512">
                <path d={this.state.github}/>
              </svg>
            </a>
          </div>
          <div className="icon icon--linkedin">
            <a href="https://www.linkedin.com/in/cschwartz525">
              <svg viewBox="0 0 512 512">
                <path d={this.state.linkedin}/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
