var React = require('react');
var AboutPage = require('./about/aboutPage');
var ContactPage = require('./contact/contactPage');
var ResumePage = require('./resume/resumePage');

var MainContainer = React.createClass({
  displayName: 'MainContainer',
  propTypes: {
    selectedPanel: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div id="mainContainer">
      {this.props.selectedPanel}
      </div>
    );
  }
});

module.exports = MainContainer;
