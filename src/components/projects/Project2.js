import React from 'react';
import { Container, Grid, GridColumn, GridRow, Image, Header, Button } from 'semantic-ui-react';

import './Project2.css';

import { data } from '../../data/ProjectData';

const Project2 = () => {
    // need to make skills iterable
    //const mapSkills = skills => {
    //    return skills.map(skill => <span>{skill}</span>);
    //};

    return (
        <Container id='projectContainer'>
            <Grid columns='2'>
                <GridColumn>
                    <Image src={data[0].screenshot} />
                </GridColumn>
                <GridColumn>
                    <Grid>
                        <GridRow centered>
                            <Header as='h3' id='projectHeader'>
                                {data[0].title}
                            </Header>
                        </GridRow>
                        <GridRow>
                            <p id='projectDescription'>{data[0].description}</p>
                        </GridRow>
                        <GridRow>
                            <span id='projectSkills'>{data[0].skills}</span>
                        </GridRow>
                        <GridRow centered>
                            <Button id='githubButton' color='blue'>View Github Repo</Button>
                            <a href={data[0].link} target='_blank' rel='noreferrer'>
                                <Button id='projectButton' color='green'>View Project</Button>
                            </a>
                        </GridRow>
                    </Grid>
                </GridColumn>
            </Grid>
        </Container>
    );
};

export default Project2;