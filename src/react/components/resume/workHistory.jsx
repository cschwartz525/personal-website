var React = require('react');

var WorkHistory = React.createClass({
  displayName: 'WorkHistory',
  propTypes: {
    data: React.PropTypes.shape({
      companyName: React.PropTypes.string,
      department: React.PropTypes.string,
      description: React.PropTypes.string,
      endDate: React.PropTypes.string,
      jobTitle: React.PropTypes.string,
      location: React.PropTypes.string,
      logo: React.PropTypes.string,
      projects: React.PropTypes.arrayOf(React.PropTypes.string),
      startDate: React.PropTypes.string,
      website: React.PropTypes.string
    })
  },
  render: function() {
    var projects = [];
    if (this.props.data.projects) {
      projects = this.props.data.projects.map(function(project, index) {
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
                {this.props.data.companyName}
            </div>
            <div>
              {this.props.data.jobTitle}
            </div>
          </div>
          <div className="right">
            <img className="companyLogo" src={"../assets/images/" + this.props.data.logo}></img>
          </div>
        </div>

        <div className="workHistorySummary">
          <div className="left">
            <div>
              {this.props.data.department}
            </div>
            <div>
              {this.props.data.location}
            </div>
            <div>
              {this.props.data.startDate} - {this.props.data.endDate}
            </div>
            <div>
              <a href={this.props.data.website}>
                {this.props.data.website}
              </a>
            </div>
          </div>
          <div className="right">
            <p>
              {this.props.data.description}
            </p>
            <ul>{projects}</ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WorkHistory;
