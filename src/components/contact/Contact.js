import React from 'react';
import { Grid, Container, Image, Icon, Header, Divider } from 'semantic-ui-react';
import ContactButton from './ContactButton';

import selfie from '../../images/selfie.jpeg';

const Contact = () => {
    return (
        <Grid padded centered>
            <Grid.Row color='violet'>
                <Container>
                    <Image
                        src={selfie}
                        size='small'
                        inline
                        circular
                        style={{ marginTop: '50px' }}
                    />
                    <Icon name='talk' size='huge' />
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
        </Grid>
    );
};

export default Contact;