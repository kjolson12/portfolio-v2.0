import React from 'react';
import { Grid, Icon, Button } from 'semantic-ui-react';

const Navbar = ({ toggleTheme, themeClassName }) => {
    return (
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={8} verticalAlign='middle'>
                    <Icon
                        name={themeClassName('toggle off', 'toggle on')}
                        size='huge'
                        onClick={toggleTheme}
                        color='violet'
                    />
                    <Icon
                        name={themeClassName('sun', 'moon')}
                        size='big'
                        color='violet'
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button
                        color='violet'
                        floated='right'
                        animated
                        href='https://docs.google.com/document/d/1hwFZ9iQUeT3MRrY428W56Vt7OMOV-UB-SPG-A_fPzOw/export?format=pdf'
                        size='huge'
                    >
                        <Button.Content visible>Resumé</Button.Content>
                        <Button.Content hidden>
                            <Icon name='download' />
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Navbar;