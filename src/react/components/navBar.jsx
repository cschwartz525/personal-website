var React = require('react');
var NavItem = require('./navItem');

var NavBar = React.createClass({
  propTypes: {
    onNavChanged: React.PropTypes.func.isRequired,
    selectedItem: React.PropTypes.string.isRequired
  },
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
