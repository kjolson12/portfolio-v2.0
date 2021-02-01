import React, { useState } from 'react';
import { Visibility, Transition, Container, Grid, GridColumn, GridRow, Image, Header, Button } from 'semantic-ui-react';

import './Project.css';

const Project = ({ screenshot, title, description, skills, link, githubLink, themeClassName }) => {
    const [visible, setVisable] = useState(false);

    const fadeIn = () => {
        setVisable(true);
    };

    return (
        <Visibility once={false} onOnScreen={fadeIn}>
            <Transition
                visible={visible}
                animation='fade'
                duration={3000}
                mountOnShow={false}
            >
                <Container id='projectContainer'>
                    <Grid stackable columns='2'>
                        <GridColumn>
                            <Image
                                href={link}
                                target='_blank'
                                rel='noreferrer'
                                src={screenshot}
                            />
                        </GridColumn>
                        <GridColumn>
                            <Grid>
                                <GridRow centered>
                                    <Header as='h3' id={themeClassName('projectHeader', 'projectHeaderDark')}>
                                        {title}
                                    </Header>
                                </GridRow>
                                <GridRow>
                                    <p id={themeClassName('projectDescription', 'projectDescriptionDark')}>{description}</p>
                                </GridRow>
                                <GridRow>
                                    <span id={themeClassName('projectSkills', 'projectSkillsDark')}>{skills}</span>
                                </GridRow>
                                <GridRow centered>
                                    <a href={githubLink} target='_blank' rel='noreferrer'>
                                        <Button id='githubButton' color='blue'>View Github Repo</Button>
                                    </a>
                                    <a href={link} target='_blank' rel='noreferrer'>
                                        <Button id='projectButton' color='green'>View Project</Button>
                                    </a>
                                </GridRow>
                            </Grid>
                        </GridColumn>
                    </Grid>
                </Container>
            </Transition>
        </Visibility>
    );
};

export default Project;