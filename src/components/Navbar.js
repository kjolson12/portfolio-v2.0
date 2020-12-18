import React from 'react';
import { Grid, Icon, Button } from 'semantic-ui-react';

import Logo from '../images/Violet_Black_logo';

const Navbar = ({ toggleTheme, themeClassName }) => {
    return (
        <Grid padded>
            <Grid.Column width={8}>
                <Logo />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid stackable verticalAlign='middle' reversed='mobile'>
                    <Grid.Column textAlign='right' width={12}>
                        <Icon
                            name={themeClassName('sun', 'moon')}
                            size='big'
                            color='violet'
                        />
                        <Icon
                            name={themeClassName('toggle off', 'toggle on')}
                            size='huge'
                            onClick={toggleTheme}
                            color='violet'
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button
                            color='violet'
                            floated='right'
                            animated
                            href='https://docs.google.com/document/d/1hwFZ9iQUeT3MRrY428W56Vt7OMOV-UB-SPG-A_fPzOw/export?format=pdf'
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