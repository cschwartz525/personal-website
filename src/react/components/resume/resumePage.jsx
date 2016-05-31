var React = require('react');
var Education = require('./education');
var Skill = require('./skill');
var WorkHistory = require('./workHistory');

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
      <div id="mainContent">
        <h1 className="pageTitle">Resume</h1>

        <h2 className="pageSubtitle">Skills</h2>
        <div className="pageContent">
          <div id="skills">
            {skills}
          </div>
        </div>

        <h2 className="pageSubtitle">Work Experience</h2>
        <div className="pageContent">
          {jobs}
        </div>

        <h2 className="pageSubtitle">Education</h2>
        <div className="pageContent">
          {education}
        </div>
      </div>
    );
  }
});

module.exports = ResumePage;
