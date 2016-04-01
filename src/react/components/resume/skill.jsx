var React = require('react');

var Skill = React.createClass({
  render: function() {
    return (
      <div className="skill">
        {this.props.name}
      </div>
    );
  }
});

module.exports = Skill;
