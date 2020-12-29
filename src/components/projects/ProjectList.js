import React, { useState } from 'react';
import { Visibility, Transition, Container, Card } from 'semantic-ui-react';

import Project from './Project';
import { data } from '../../data/ProjectData';

const ProjectList = ({ themeClassName }) => {
    const [visible, setVisable] = useState(false);

    const fadeIn = () => {
        setVisable(true);
    };

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

    return (
        <Container>
            <Visibility once={false} onOnScreen={fadeIn}>
                <Transition
                    visible={visible}
                    animation='fade'
                    duration={3000}
                >
                    <Container>
                        <Card.Group stackable itemsPerRow={3}>
                            {renderProjects}
                        </Card.Group>
                    </Container>
                </Transition>
            </Visibility>
        </Container>
    );
};

export default ProjectList;