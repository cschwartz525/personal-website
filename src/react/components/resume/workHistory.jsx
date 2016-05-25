var React = require('react');

var WorkHistory = React.createClass({
  render: function() {
    var projects = [];
    if (this.props.projects) {
      projects = this.props.projects.map(function(project, index) {
        return (
          <li key={index}>{project}</li>
        );
      });
    }

    return (
      <div className="workHistory">
        <div className="workHistoryHeader">
          <div className="left">
            <div>
                {this.props.companyName}
            </div>
            <div>
              {this.props.jobTitle}
            </div>
          </div>
          <div className="right">
            <img className="companyLogo" src={"../assets/images/" + this.props.logo}></img>
          </div>
        </div>

        <div className="workHistorySummary">
          <div className="left">
            <div>
              {this.props.department}
            </div>
            <div>
              {this.props.location}
            </div>
            <div>
              {this.props.startDate} - {this.props.endDate}
            </div>
            <div>
              <a href={this.props.website}>
                {this.props.website}
              </a>
            </div>
          </div>
          <div className="right">
            <p>
              {this.props.description}
            </p>
            <ul>{projects}</ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WorkHistory;
