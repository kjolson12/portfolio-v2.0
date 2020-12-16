import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Project = ({ screenshot, title, description, skills, themeClassName, link }) => {
    return (
        <Card
            raised
            style={{
                backgroundColor: themeClassName('', '#282828'),
                boxShadow: themeClassName('', 'none')
            }}
        >
            <Image
                href={link}
                src={screenshot}
                alt='Project Screenshot'
                target='_blank'
                rel='noopener noreferrer'
            />
            <Card.Content>
                <Card.Header
                    href={link}
                    target='_blank'
                    style={{ color: themeClassName('', 'white') }}
                    rel='noopener noreferrer'
                >
                    {title}
                </Card.Header>
                <Card.Description
                    style={{ color: themeClassName('', 'white') }}
                >
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content
                extra
                style={{ color: themeClassName('', 'white') }}
            >
                {skills}
            </Card.Content>
        </Card>
    );
}
export default Project;