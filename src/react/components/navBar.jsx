var React = require('react');

var NavItem = React.createClass({
  hanldeClick: function(e) {
    e.preventDefault();
    this.props.onNavItemSelected(this.props.content);
  },
  render: function() {
    var status = 'inactive';
    if (this.props.content === this.props.selectedNavItem) {
      status = 'active';
    }

    var cssClass = 'navItem noSelect hvr-bounce-in ' + status;

    return (
      <div className={cssClass} onClick={this.hanldeClick}>
        {this.props.content}
      </div>
    );
  }
});

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
