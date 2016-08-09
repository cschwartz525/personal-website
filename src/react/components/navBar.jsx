var React = require('react');
var NavItem = require('./navItem');

var NavBar = React.createClass({
  displayName: 'NavBar',
  propTypes: {
    selectedItem: React.PropTypes.string.isRequired
  },
  render: function() {
    var selectedNavItem = this.props.selectedItem.substring(1);
    return (
      <div id="navBar">
        <img id="navBarLogo" src="assets/images/logo.png" />
        <NavItem
          content="About"
          link="about"
          selectedNavItem={selectedNavItem}
        />
        <NavItem
          content="Resume"
          link="resume"
          selectedNavItem={selectedNavItem}
        />
        <NavItem
          content="Contact"
          link="contact"
          selectedNavItem={selectedNavItem}
        />
      </div>
    );
  }
});

module.exports = NavBar;
