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
          department={job.department}
          endDate={job.endDate}
          jobTitle={job.jobTitle}
          location={job.location}
          logo={job.logo}
          startDate={job.startDate}
          website={job.website}
        />
      );
    });

    var education = this.state.education.map(function(school, index) {
      return (
        <Education
          key={index}
          degree={school.degree}
          logo={school.logo}
          major={school.major}
          name={school.name}
          website={school.website}
          year={school.year}
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
