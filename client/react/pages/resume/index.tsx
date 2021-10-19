import React, { memo, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Card from './Card';
import data from './data.json';

const Container = styled.div`
    margin: 0 auto;
    max-width: 600px;
    padding: 0 20px 100px;
`;

const ResumePage = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    const { education, jobs } = data;

    return (
        <Container>
            <h1 className='centered'>My Experience</h1>

            <CSSTransition
                classNames='resume'
                in={isMounted}
                timeout={5000}
                unmountOnExit
            >
                <h2>JOBS</h2>
            </CSSTransition>
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
                            <CSSTransition
                                classNames='resume'
                                in={isMounted}
                                key={`job-${index}`}
                                timeout={5000}
                                unmountOnExit
                            >
                                <Card
                                    endDate={endDate}
                                    heading={companyName}
                                    index={index}
                                    notes={projects}
                                    startDate={startDate}
                                    subheading={jobTitle}
                                    summary={description}
                                />
                            </CSSTransition>
                        );
                    })
                }
            </div>

            <CSSTransition
                classNames='resume'
                in={isMounted}
                timeout={5000}
                unmountOnExit
            >
                <h2>EDUCATION</h2>
            </CSSTransition>
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
                            <CSSTransition
                                classNames='resume'
                                in={isMounted}
                                key={`school-${index}`}
                                timeout={5000}
                                unmountOnExit
                            >
                                <Card
                                    endDate={endDate}
                                    heading={name}
                                    index={jobs.length + index}
                                    notes={courses}
                                    startDate={startDate}
                                    subheading={`${degree} - ${major}`}
                                    summary='Relevant coursework'
                                />
                            </CSSTransition>
                        );
                    })
                }
            </div>
        </Container>
    );
};

export default memo(ResumePage);
