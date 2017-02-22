var React = require('react');
var NavItem = require('./navItem');

var NavBar = React.createClass({
  displayName: 'NavBar',
  propTypes: {
    selectedItem: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div id="navbar">
        <img id="navbar-logo" src="assets/images/logo.png" />
        <NavItem
          content="About"
          link="about"
          selectedNavItem={this.props.selectedItem}
        />
        <NavItem
          content="Resume"
          link="resume"
          selectedNavItem={this.props.selectedItem}
        />
        <NavItem
          content="Contact"
          link="contact"
          selectedNavItem={this.props.selectedItem}
        />
      </div>
    );
  }
});

module.exports = NavBar;
