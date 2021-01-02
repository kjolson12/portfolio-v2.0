import React from 'react';
import { Container, Transition } from 'semantic-ui-react';

import './NameAndTitle2.css';

const NameAndTitle2 = () => {
    return (
        <div id='nameContainer'>
            <Transition
                transitionOnMount={true}
                animation='fade left'
                duration={2000}
            >
                <Container>
                    <h1>kyle</h1>
                    <h1>olson</h1>
                </Container>
            </Transition>
            <Transition
                transitionOnMount={true}
                animation='fade left'
                duration={2500}
            >
                <Container>
                    <h3>front end engineer</h3>
                </Container>
            </Transition>
        </div>
    );
}

export default NameAndTitle2;