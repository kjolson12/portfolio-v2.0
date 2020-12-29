import React from 'react';
import { Grid, Icon, Button, Popup } from 'semantic-ui-react';

import Logo from '../images/Violet_Black_logo';

const Navbar = ({ toggleTheme, themeClassName }) => {
    return (
        <Grid padded>
            <Grid.Column width={8}>
                <Logo />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid verticalAlign='middle'>
                    <Grid.Column textAlign='right' width={12} only='computer'>
                        <Icon
                            name={themeClassName('sun', 'moon')}
                            size='big'
                            color='violet'
                        />
                        <Popup
                            content='Change the theme!'
                            mouseEnterDelay={500}
                            mouseLeaveDelay={250}
                            inverted={themeClassName(false, true)}
                            trigger={
                                <Icon
                                    name={themeClassName('toggle off', 'toggle on')}
                                    size='huge'
                                    onClick={toggleTheme}
                                    color='violet'
                                />
                            }
                        />
                    </Grid.Column>
                    <Grid.Column width={12} only='mobile tablet'>
                        <Icon
                            name={themeClassName('sun', 'moon')}
                            size='big'
                            color='violet'
                            onClick={toggleTheme}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button
                            color='violet'
                            floated='right'
                            animated
                            href='https://docs.google.com/document/d/1i2JHPheXS9esD8rPgV5SG6ZIDqQRP7zC_4bCccul_4w/export?format=pdf'
                            size='big'
                        >
                            <Button.Content visible>Resumé</Button.Content>
                            <Button.Content hidden>
                                <Icon name='download' />
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
};

export default Navbar;