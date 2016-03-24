var React = require('react');
var AboutPage = require('./aboutPage');
var ContactPage = require('./contactPage');
var HomePage = require('./homePage');
var ResumePage = require('./resumePage');

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
