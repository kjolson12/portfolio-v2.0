import React from 'react';
import { Container, Transition, Header } from 'semantic-ui-react';

import './NameAndTitle.css';

const NameAndTitle = () => {
    return (
        <Container align='center'>
            <Transition transitionOnMount={true} animation='fade left' duration={2000}>
                <Header
                    as='h1'
                    color='violet'
                    id='nameHeader'
                >
                    Kyle Olson
                </Header>
            </Transition>
            <Transition transitionOnMount={true} animation='fade left' duration={2500}>
                <Header
                    as='h2'
                    color='violet'
                    id='titleHeader'
                >
                    Front End Engineer
                </Header>
            </Transition>
        </Container>
    );
};

export default NameAndTitle;