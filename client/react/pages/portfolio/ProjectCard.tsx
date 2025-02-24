import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import ScreenshotsModal from './ScreenshotsModal';
import colors from '../../styles/colors';

library.add(fab, faCamera, faGithub, faGlobe);

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

const ScreenshotsButton = styled.button`
    background: ${colors.semiTransparentBlack};
    border-radius: 10px;
    color: ${colors.white};
    cursor: pointer;
    padding: 5px;
    width: 100%;

    &:hover {
        background: ${colors.black};
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
    images: string[];
};

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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

                    <ScreenshotsButton onClick={() => setIsModalOpen(true)}>Screenshots <FontAwesomeIcon icon='camera' /></ScreenshotsButton>
                </BottomContainer>
            </CardContainer>
            <ScreenshotsModal images={project.images} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
    );
};

export default memo(ProjectCard);