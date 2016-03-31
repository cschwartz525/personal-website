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
    var jobs = this.state.jobs.map(function(job, index) {
      return (
        <WorkHistory
          key={index}
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

    var education = this.state.education.map(function(school, index) {
      return (
        <Education
          key={index}
          name={school.name}
          degree={school.degree}
          major={school.major}
          year={school.year}
          website={school.website}
          logo={school.logo}
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
          {education}
        </div>
      </div>
    );
  }
});

module.exports = ResumePage;
