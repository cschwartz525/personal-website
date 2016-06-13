var React = require('react');

var Skill = React.createClass({
  displayName: 'Skill',
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="skill noSelect">
        {this.props.name}
      </div>
    );
  }
});

module.exports = Skill;
