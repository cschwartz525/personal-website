var React = require('react');
var Education = require('./education');
var Skill = require('./skill');
var WorkHistory = require('./workHistory');

var ResumePage = React.createClass({
  displayName: 'ResumePage',
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
    var skills = this.state.skills.map(function(skill, index) {
      return (
        <Skill
          key={index}
          name={skill}
        />
      );
    });

    var jobs = this.state.jobs.map(function(job, index) {
      return (
        <WorkHistory
          key={index}
          data={job}
        />
      );
    });

    var education = this.state.education.map(function(school, index) {
      return (
        <Education
          key={index}
          data={school}
        />
      );
    });

    return (
      <div id="main-content">
        <h1 className="page-title">Resume</h1>

        <h2 className="page-subtitle">Skills</h2>
        <div className="page-content">
          <div id="skills">
            {skills}
          </div>
        </div>

        <h2 className="page-subtitle">Work Experience</h2>
        <div className="page-content">
          {jobs}
        </div>

        <h2 className="page-subtitle">Education</h2>
        <div className="page-content">
          {education}
        </div>
      </div>
    );
  }
});

module.exports = ResumePage;
