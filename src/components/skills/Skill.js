import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

const Skill = ({ imageSource, skill, themeClassName }) => {
    return (
        <Grid centered>
            <Grid.Row>
                <Image
                    alt='logo'
                    src={imageSource}
                    size='tiny'
                />
            </Grid.Row>
            <Grid.Row>
                <Header
                    as='h3'
                    inverted={themeClassName(false, true)}
                >
                    {skill}
                </Header>
            </Grid.Row>
        </Grid>
    );
}

export default Skill;