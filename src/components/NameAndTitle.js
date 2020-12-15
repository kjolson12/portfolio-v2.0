import React, { useState, useEffect } from 'react';
import { Container, Transition, Header } from 'semantic-ui-react';

const NameAndTitle = ({ themeClassName }) => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setVisible(true), 500);
    }, []);
    
    return (
        <Container align='center'>
            <Transition transitionOnMount={true} animation='fade left' duration={2000}>
                <Header
                    as='h1'
                    color='violet'
                    style={{ fontSize: '7rem', marginTop: '20px' }}
                    inverted={themeClassName(false, true)}
                >
                    Kyle Olson
                </Header>
            </Transition>
            <Transition visible={visible} animation='fade left' duration={2500}>
                <Header
                    as='h2'
                    color='violet'
                    style={{ fontSize: '2.5rem', fontWeight: '100'}}
                    inverted={themeClassName(false, true)}
                >
                    Front End Engineer
                </Header>
            </Transition>
        </Container>
    );
};

export default NameAndTitle;