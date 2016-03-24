var React = require('react');

var WorkHistory = React.createClass({
  render: function() {
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
            <div className="companyLogo"></div>
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
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WorkHistory;
