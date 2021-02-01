import React from 'react';

import Project from './Project';
import { data } from '../../data/ProjectData';

const ProjectList = ({ themeClassName }) => {
    const renderProjects = data.map(project => {
        return (
            <Project
                screenshot={project.screenshot}
                title={project.title}
                description={project.description}
                skills={project.skills}
                key={project.title}
                themeClassName={themeClassName}
                link={project.link}
            />
        )
    });

    return <div>{renderProjects}</div>;
};

export default ProjectList;