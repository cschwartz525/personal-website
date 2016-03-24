var React = require('react');

var HomePage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Home</h1>
      </div>
    );
  }
});

var AboutPage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">About</h1>
      </div>
    );
  }
});

var ResumePage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Resume</h1>
      </div>
    );
  }
});

var ContactPage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Contact</h1>
        <div id="contactList">
          <div className="contactItem"><a href="mailto:craigschwartz525@gmail.com">craigschwartz525@gmail.com</a></div>
          <div className="contactItem">914-373-1348</div>
        </div>
      </div>
    );
  }
});

var MainContainer = React.createClass({
  currentTab: function (tab) {
    switch (tab) {
      case "Home":   return <HomePage />;
      case "About": return <AboutPage />;
      case "Resume":  return <ResumePage />;
      case "Contact":  return <ContactPage />;
      default:      return <HomePage />;
    }
  },

  render: function() {
    return (
      <div id="mainContainer">
      {this.currentTab(this.props.selectedPanel)}
      </div>
    );
  }
});

module.exports = MainContainer;
