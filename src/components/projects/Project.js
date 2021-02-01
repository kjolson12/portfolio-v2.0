import React, { useState } from 'react';
import { Visibility, Transition, Container, Grid, GridColumn, GridRow, Image, Header, Button } from 'semantic-ui-react';

import './Project.css';

const Project = ({ screenshot, title, description, skills, link, githubLink, themeClassName, reversed }) => {
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
                    <Grid reversed={reversed} stackable columns='2'>
                        <GridColumn>
                            <Image
                                href={link}
                                target='_blank'
                                rel='noreferrer'
                                src={screenshot}
                            />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Grid>
                                <GridRow id='headerRow' centered>
                                    <Header as='h3' id={themeClassName('projectHeader', 'projectHeaderDark')}>
                                        {title}
                                    </Header>
                                </GridRow>
                                <GridRow id='descriptionRow'>
                                    <p id={themeClassName('projectDescription', 'projectDescriptionDark')}>{description}</p>
                                </GridRow>
                                <GridRow id='skillsRow'>
                                    <span id={themeClassName('projectSkills', 'projectSkillsDark')}>{skills}</span>
                                </GridRow>
                                <GridRow centered id='buttonsRow'>
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