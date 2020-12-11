import React from 'react';
import { Image } from 'semantic-ui-react';

import computerImage from '../images/gummy-programming.png';

const MainImage = () => {
    return (
        <Image
            alt='computer and books'
            src={computerImage}
            size='large'
            centered
            style={{ marginTop: '100px' }}
        />
    );
};

export default MainImage;