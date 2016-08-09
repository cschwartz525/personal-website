var React = require('react');
var Link = require('react-router').Link;

var NavItem = React.createClass({
  displayName: 'NavItem',
  propTypes: {
    content: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    selectedNavItem: React.PropTypes.string.isRequired
  },
  render: function() {
    var status = 'inactive';
    if (this.props.link === this.props.selectedNavItem) {
      status = 'active';
    }

    var cssClass = 'navItem noSelect hvr-bounce-in ' + status;

    return (
      <Link to={this.props.link}>
        <div className={cssClass}>
          {this.props.content}
        </div>
      </Link>
    );
  }
});

module.exports = NavItem;
