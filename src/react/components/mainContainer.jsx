var React = require('react');
var AboutPage = require('./about/aboutPage');
var ContactPage = require('./contact/contactPage');
var ResumePage = require('./resume/resumePage');

var MainContainer = React.createClass({
  propTypes: {
    selectedPanel: React.PropTypes.string.isRequired
  },
  currentTab: function (tab) {
    switch (tab) {
      case "About": return <AboutPage />;
      case "Resume":  return <ResumePage />;
      case "Contact":  return <ContactPage />;
      default:      return <AboutPage />;
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
