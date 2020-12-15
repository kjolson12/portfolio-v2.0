import React, { useState } from 'react';
import { Visibility, Transition, Segment, Grid, Header, Container } from 'semantic-ui-react';

import Skill from './Skill';

const SkillList = ({ themeClassName, title, data, dataLength }) => {
    const [visible, setVisable] = useState(false);

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

    const fadeIn = () => {
        setVisable(true);
    }

    return (
        <Visibility once={false} onOnScreen={fadeIn}>
            <Transition
                visible={visible}
                animation='fade up'
                duration={3000}
            >
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
            </Transition>
        </Visibility>
    );
}

export default SkillList;