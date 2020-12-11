import React from 'react';
import { Button } from 'semantic-ui-react';

const ContactButton = ({ iconName, link }) => {
    return (
            <Button
                circular
                inverted
                icon={iconName}
                size='huge'
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                style={{ margin: '0px 20px' }}
            /> 
    );
};

export default ContactButton;