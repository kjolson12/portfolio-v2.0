import React from 'react';
import { Grid, Container, Icon, Header, Divider } from 'semantic-ui-react';
import ContactButton from './ContactButton';

const Contact = () => {
    return (
        <Grid padded centered>
            <Grid.Row color='violet'>
                <Container>
                    <Header
                        icon
                        inverted
                        as='h1'
                        style={{ marginTop: '50px', }}
                    >
                        <Icon name='talk' />
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
        </Grid>
    );
};

export default Contact;