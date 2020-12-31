import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';

import './ImageHeader.css';

const ImageHeader = ({ headerText, imgSrc, themeClassName }) => {
    return (
        <Container id='container'>
                <Header
                    id={themeClassName('lightHeader', 'darkHeader')}
                    as='h1'>{headerText}
                </Header>
                <Image src={imgSrc} size='small'/>
        </Container>        
    );
};

export default ImageHeader;