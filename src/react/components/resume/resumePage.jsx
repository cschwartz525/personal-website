var React = require('react');
var WorkHistory = require('./workHistory');
var Education = require('./education');

var ResumePage = React.createClass({
  render: function() {
    return (
      <div id="mainContent">
        <h1 className="pageTitle">Resume</h1>

        <h2 className="pageSubtitle">Work Experience</h2>
        <div id="previousJobs">
          <WorkHistory
            companyName="Trustpilot"
            jobTitle="Software Developer"
            department="Commercial Growth Team"
            location="New York, NY"
            startDate="2016"
            endDate="Present"
            website="https://www.trustpilot.com/"
            logo="trustpilot.png"
          />
          <WorkHistory
            companyName="Citigroup"
            jobTitle="Assitant Vice President - Software Devleopment"
            department="ICG Technology"
            location="New York, NY"
            startDate="2013"
            endDate="2016"
            website="http://www.citigroup.com/citi/"
            logo="citi.png"
          />
          <WorkHistory
            companyName="The Lloyd Group"
            jobTitle="Operations Intern"
            department="Summer Internship"
            location="New York, NY"
            startDate="2012"
            endDate="2012"
            website="http://www.lloydgroup.com/"
            logo="lloyd.png"
          />
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
