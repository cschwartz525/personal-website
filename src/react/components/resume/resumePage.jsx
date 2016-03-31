var React = require('react');
var WorkHistory = require('./workHistory');
var Education = require('./education');

var ResumePage = React.createClass({
  getInitialState: function() {
    return {
      skills: [],
      jobs: [],
      education: []
    };
  },

  componentDidMount: function() {
    $.getJSON('/api/resume')
      .done(function(response) {
        this.setState(response);
      }.bind(this))
      .fail(function(err) {
        console.log('Error loading resume data');
      });
  },

  render: function() {
    var jobs = this.state.jobs.map(function(job) {
      return (
        <WorkHistory
          companyName={job.companyName}
          jobTitle={job.jobTitle}
          department={job.department}
          location={job.location}
          startDate={job.startDate}
          endDate={job.endDate}
          website={job.website}
          logo={job.logo}
        />
      );
    });

    return (
      <div id="mainContent">
        <h1 className="pageTitle">Resume</h1>

        <h2 className="pageSubtitle">Work Experience</h2>
        <div id="previousJobs">
          {jobs}
        </div>

        <h2 className="pageSubtitle">Education</h2>
        <div id="education">
        <Education
          name="University of Virginia"
          degree="Bachelor of Science"
          major="Computer Science"
          year="2013"
          website="http://www.virginia.edu/"
          logo="uva.png"
        />
        </div>
      </div>
    );
  }
});

module.exports = ResumePage;
