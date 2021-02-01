import React from 'react';

import Project from './Project';
import { data } from '../../data/ProjectData';

const ProjectList = ({ themeClassName }) => {
    const renderReversed = project => {
        if (project.id % 2 === 0) {
            return 'computer tablet'
        }
    };

    const renderProjects = data.map(project => {
        return (
            <Project
                screenshot={project.screenshot}
                title={project.title}
                description={project.description}
                skills={project.skills}
                key={project.id}
                themeClassName={themeClassName}
                link={project.link}
                githubLink={project.githubLink}
                reversed={renderReversed(project)}
            />
        )
    });

    return <div>{renderProjects}</div>;
};

export default ProjectList;