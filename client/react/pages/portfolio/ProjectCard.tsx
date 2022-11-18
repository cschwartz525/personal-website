import React, { memo } from 'react';

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
    <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.links.production}>Live</a>
        <a href={project.links.github}>GitHub</a>
        <ul>
            {project.tools.map((tool, index) => <li key={tool}>{tool}</li>)}
        </ul>
    </div>
);

export default memo(ProjectCard);