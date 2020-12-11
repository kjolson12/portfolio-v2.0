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
                        style={{ margin: '50px', fontWeight: '100' }}
                    >
                        I have always had a passion for tech. However, I did not take
                        programming seriously until two years after graduating college. I 
                        recieved my degree in Biology from the University of Oregon where
                        the only code I wrote was in MATLAB. I only took 1 computer science
                        course but that was all that was needed to spark a continuing interest
                        in web development.
                    </p>
                </Container>
            </Grid.Row>
        </Grid>
    );
};

export default Bio;