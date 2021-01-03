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
                        style={{ margin: '50px 0px', fontWeight: '100', lineHeight: '1.75', fontSize: '1.5rem' }}
                    >
                        I was first introduced to web development in 2015, but it took four
                        years of biology classes and two years in biomedical research for me to realize 
                        that coding was my calling. My relentless pursuit of perfection and
                        determination to find creative solutions help me to build clean, 
                        effective projects and will make me a strong asset to any engineering team.
                    </p>
                </Container>
            </Grid.Row>
        </Grid>
    );
};

export default Bio;