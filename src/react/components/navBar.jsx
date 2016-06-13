var React = require('react');
var NavItem = require('./navItem');

var NavBar = React.createClass({
  displayName: 'NavBar',
  propTypes: {
    onNavChanged: React.PropTypes.func.isRequired,
    selectedItem: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div id="navBar">
        <img id="navBarLogo" src="assets/images/logo.png" />
        <NavItem
          content="About"
          onNavItemSelected={this.props.onNavChanged}
          selectedNavItem={this.props.selectedItem}
        />
        <NavItem
          content="Resume"
          onNavItemSelected={this.props.onNavChanged}
          selectedNavItem={this.props.selectedItem}
        />
        <NavItem
          content="Contact"
          onNavItemSelected={this.props.onNavChanged}
          selectedNavItem={this.props.selectedItem}
        />
      </div>
    );
  }
});

module.exports = NavBar;
