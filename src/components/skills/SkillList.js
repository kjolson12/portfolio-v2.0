import React from 'react';
import { Segment, Grid, Header, Container } from 'semantic-ui-react';

import Skill from './Skill';

const SkillList = ({ themeClassName, title, data, dataLength }) => {
    const renderSkills = data.map(skill => {
        return  (
            <Grid.Column key={skill.name}>
                <Skill
                    skill={skill.name}
                    imageSource={skill.imageSource}
                    themeClassName={themeClassName}
                />
            </Grid.Column>
        )
    });

    return (
        <Container>
            <Segment
                raised
                padded
                inverted={themeClassName(false, true)}
            >
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                as='h3'
                                inverted={themeClassName(false, true)}
                            >
                                {title}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid doubling centered columns={dataLength}>
                            {renderSkills}    
                        </Grid>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    );
}

export default SkillList;