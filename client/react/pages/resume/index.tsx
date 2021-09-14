import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 0 20px 100px;
`;

const ResumePage = () => {
    const [education, setEducation] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/resume')
            .then(res => res.json())
            .then((data) => {
                setEducation(data.education);
                setJobs(data.jobs);
            })
            .catch((error: Error) => {
                console.error('Error fetching resume data', error);
            });
    }, []);

    return (
        <Container>
            <h1 className='centered'>My Experience</h1>

            <h2>JOBS</h2>
            <div>
                {
                    jobs.map((job, index) => {
                        const {
                            companyName,
                            description,
                            endDate,
                            jobTitle,
                            projects,
                            startDate
                        } = job;

                        return (
                            <Card
                                endDate={endDate}
                                heading={companyName}
                                key={`job-${index}`}
                                notes={projects}
                                startDate={startDate}
                                subheading={jobTitle}
                                summary={description}
                            />
                        );
                    })
                }
            </div>

            <h2>EDUCATION</h2>
            <div>
                {
                    education.map((school, index) => {
                        const {
                            courses,
                            degree,
                            endDate,
                            major,
                            name,
                            startDate
                        } = school;

                        return (
                            <Card
                                endDate={endDate}
                                heading={name}
                                key={`school-${index}`}
                                notes={courses}
                                startDate={startDate}
                                subheading={`${degree} - ${major}`}
                                summary='Relevant coursework'
                            />
                        );
                    })
                }
            </div>
        </Container>
    );
};

export default memo(ResumePage);
