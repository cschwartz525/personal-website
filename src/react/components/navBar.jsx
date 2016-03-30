var React = require('react');
var NavItem = require('./navItem');

var NavBar = React.createClass({
  render: function() {
    return (
      <div id="navBar">
        <img id="navBarLogo" src="assets/images/logo.png" />
        <NavItem content="Home" selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
        <NavItem content="About" selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
        <NavItem content="Resume" selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
        <NavItem content="Contact" selectedNavItem={this.props.selectedItem} onNavItemSelected={this.props.onNavChanged} />
      </div>
    );
  }
});

module.exports = NavBar;
