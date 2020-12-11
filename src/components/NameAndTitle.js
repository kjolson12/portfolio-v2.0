import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const NameAndTitle = ({ themeClassName }) => {
    return (
        <Container align='center'>
            <Header
                as='h1'
                color='violet'
                style={{ fontSize: '7rem', marginTop: '20px' }}
                inverted={themeClassName(false, true)}
            >
                Kyle Olson
            </Header>
            <Header
                as='h2'
                color='violet'
                style={{ fontSize: '2.5rem', fontWeight: '100'}}
                inverted={themeClassName(false, true)}
            >
                Front End Engineer
            </Header>
        </Container>
    );
};

export default NameAndTitle;