var React = require('react');

var Education = React.createClass({
  render: function() {
    return (
      <div className="educationHistory">
        <div className="educationHistoryHeader">
          <div className="left">
            <div>{this.props.name}</div>
            <div>Class of {this.props.year}</div>
          </div>
          <div className="right">
            <img className="companyLogo" src={"../assets/images/" + this.props.logo}></img>
          </div>
        </div>

        <div className="educationHistorySummary">
          <div className="left">
            <div>
              {this.props.degree}
            </div>
            <div>
              {this.props.major}
            </div>
            <div>
              <a href={this.props.website}>
                {this.props.website}
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
