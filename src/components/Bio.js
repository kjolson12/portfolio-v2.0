import React from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';

const Bio = () => {
    return (
        <Grid padded>
            <Grid.Row color='violet'>
                <Container text textAlign='center'>
                    <Header
                        inverted
                        as='h3'
                        textAlign='center'
                        style={{ margin: '50px', fontSize: '2.5rem' }}
                    >
                        Hi, I'm Kyle. Nice to meet you.
                    </Header>
                    <p
                        style={{ margin: '50px 0px', fontWeight: '100', lineHeight: '1.75' }}
                    >
                        I am a web developer relocating to the south Denver Colorado
                        area searching for career opportunities. I was introduced to code
                        about six years ago and have dedicated myself to honing the craft
                        for the last year. Currently I am skilled in the front end but plan
                        to expand my knowledge to the back end to become a more versatile
                        asset to an engineering team.
                    </p>
                </Container>
            </Grid.Row>
        </Grid>
    );
};

export default Bio;