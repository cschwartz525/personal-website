import React, { memo } from 'react';
import ProjectCard from './ProjectCard';
import data from './data.json';

const PortfolioPage = () => {
    const { projects } = data;

    return (
        <div>
            <h1 className='centered'>Portfolio</h1>
            {projects.map((project, index) => <ProjectCard key={`project-${index}`} project={project} />)}
        </div>
    );
}

export default memo(PortfolioPage);