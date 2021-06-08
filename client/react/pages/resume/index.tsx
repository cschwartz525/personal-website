import React, { memo, useEffect, useState } from 'react';
import Education from './education';
import Skill from './skill';
import WorkHistory from './workHistory';

const ResumePage = () => {
    const [education, setEducation] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/api/resume')
            .then(res => res.json())
            .then((data) => {
                setEducation(data.education);
                setJobs(data.jobs);
                setSkills(data.skills);
            })
            .catch((error: Error) => {
                console.error('Error fetching resume data', error);
            });
    }, []);

    return (
        <div id='main-content'>
            <h1 className='page-title'>Resume</h1>

            <h2 className='page-subtitle'>Skills</h2>
            <div className='page-content'>
            <div id='skills'>
                {
                    skills.map((skill, index) => (
                        <Skill
                            key={`skill-${index}`}
                            name={skill}
                        />
                    ))
                }
            </div>
            </div>

            <h2 className='page-subtitle'>Work Experience</h2>
            <div className='page-content'>
                {
                    jobs.map((job, index) => (
                        <WorkHistory
                            key={`job-${index}`}
                            data={job}
                        />
                    ))
                }
            </div>

            <h2 className='page-subtitle'>Education</h2>
            <div className='page-content'>
                {
                    education.map((school, index) => (
                        <Education
                            key={`school-${index}`}
                            data={school}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default memo(ResumePage);
