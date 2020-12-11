import React from 'react';
import { Container, Divider, Header, Icon, Card } from 'semantic-ui-react';

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

    return (
        <Container>
            <Divider horizontal style={{ marginTop: '100px', marginBottom: '50px' }}>
                <Header as='h1' inverted={themeClassName(false, true)}>
                    <Icon name='folder open' />
                    Featured Projects
                </Header>
            </Divider>
            <Card.Group stackable itemsPerRow={3}>
                {renderProjects}
            </Card.Group>
        </Container>
    );
};

export default ProjectList;