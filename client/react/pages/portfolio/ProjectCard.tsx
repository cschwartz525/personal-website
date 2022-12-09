import React, { memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import colors from '../../styles/colors';

library.add(fab, faGithub, faGlobe);

const CardContainer = styled.div`
    color: ${colors.darkblue};
    margin: 10px auto;
    max-width: 500px;
`;

const TopContainer = styled.div`
    background: linear-gradient(to right, #cf8800, #eecc00);
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const BottomContainer = styled.div`
    background: linear-gradient(to right, #dddddd, #ffffff);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 3px 0 #aaaaaa;
    padding: 10px;
`;

const Link = styled.a`
    color: ${colors.darkblue};
    font-size: 25px;
    margin-right: 5px;

    &:hover {
        color: ${colors.mediumblue};
    }
`;

type Project = {
    title: string;
    description: string;
    links: {
        github: string;
        production: string;
    };
    tools: string[];
};

const ProjectCard = ({ project }: { project: Project }): JSX.Element => (
    <CardContainer>
        <TopContainer>
            <h2>{project.title}</h2>
            <div>
                <Link href={project.links.production} target='_blank'><FontAwesomeIcon icon='globe' /></Link>
                <Link href={project.links.github} target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></Link>
            </div>
        </TopContainer>
        <BottomContainer>
            <p>{project.description}</p>

            <ul>
                {project.tools.map((tool, index) => <li key={tool}>{tool}</li>)}
            </ul>
        </BottomContainer>
    </CardContainer>
);

export default memo(ProjectCard);