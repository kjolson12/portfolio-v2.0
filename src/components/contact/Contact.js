import React from 'react';
import { Grid, Container, Image, Icon, Header, Divider } from 'semantic-ui-react';
import ContactButton from './ContactButton';

import selfie from '../../images/selfie.jpeg';

const Contact = () => {
    return (
        <Grid padded centered>
            <Grid.Row color='violet'>
                <Container>
                    <Grid centered style={{ marginTop: '50px' }}>
                        <Grid.Column width='5'></Grid.Column>
                        <Grid.Column
                            textAlign='center'
                            mobile='6'
                            tablet='4'
                            computer='3'
                        >
                            <Image
                                src={selfie}
                                inline
                                circular
                                fluid
                            />
                        </Grid.Column>
                        <Grid.Column width='5'>
                            <Icon name='talk' size='huge' />
                        </Grid.Column>
                    </Grid>
                    <Header
                        inverted
                        as='h1'
                    >
                        Get in touch
                    </Header>
                    <Divider hidden />
                    <ContactButton iconName='github' link='https://github.com/kjolson12' />
                    <ContactButton iconName='linkedin' link='https://www.linkedin.com/in/kyle-j-olson/' />
                    <ContactButton iconName='mail' link='mailto:kjolson2016@gmail.com' />
                    <Divider hidden />
                    <p
                        style={{ marginTop: '50px' }}
                    >
                        Built by Kyle Olson | 2021
                    </p>
                </Container>
            </Grid.Row>
        </Grid >
    );
};

export default Contact;