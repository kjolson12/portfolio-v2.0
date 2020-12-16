import React, { useState, useEffect } from 'react';
import { Container, Transition, Header } from 'semantic-ui-react';

import './NameAndTitle.css';

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
                    id='nameHeader'
                    inverted={themeClassName(false, true)}
                >
                    Kyle Olson
                </Header>
            </Transition>
            <Transition visible={visible} animation='fade left' duration={2500}>
                <Header
                    as='h2'
                    color='violet'
                    id='titleHeader'
                    inverted={themeClassName(false, true)}
                >
                    Front End Engineer
                </Header>
            </Transition>
        </Container>
    );
};

export default NameAndTitle;