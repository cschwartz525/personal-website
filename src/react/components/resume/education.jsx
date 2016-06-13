var React = require('react');

var Education = React.createClass({
  displayName: 'Education',
  propTypes: {
    data: React.PropTypes.shape({
      degree: React.PropTypes.string,
      logo: React.PropTypes.string,
      major: React.PropTypes.string,
      name: React.PropTypes.string,
      website: React.PropTypes.string,
      year: React.PropTypes.string
    })
  },
  render: function() {
    return (
      <div className="educationHistory">
        <div className="educationHistoryHeader">
          <div className="left">
            <div>{this.props.data.name}</div>
            <div>Class of {this.props.data.year}</div>
          </div>
          <div className="right">
            <img className="companyLogo" src={"../assets/images/" + this.props.data.logo}></img>
          </div>
        </div>

        <div className="educationHistorySummary">
          <div className="left">
            <div>
              {this.props.data.degree}
            </div>
            <div>
              {this.props.data.major}
            </div>
            <div>
              <a href={this.props.data.website}>
                {this.props.data.website}
              </a>
            </div>
          </div>
          <div className="right">
            <p>
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Education;
