import React from 'react';
import { Grid, Image, Header, Transition } from 'semantic-ui-react';

class Skill extends React.Component {
    state = { visible: true }

    toggleVisibility = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }

    render () {
        return (
            <Grid centered>
                <Grid.Row>
                    <Transition
                        animation='jiggle'
                        visible={this.state.visible}
                        duration={500}
                    >
                        <Image
                            alt='logo'
                            src={this.props.imageSource}
                            size='tiny'
                            onMouseOver={this.toggleVisibility}
                            style={{ maxHeight: '80px !important' , maxWidth: '80px !important' }}
                        />
                    </Transition>
                </Grid.Row>
                <Grid.Row>
                    <Header
                        as='h3'
                        inverted={this.props.themeClassName(false, true)}
                    >
                        {this.props.skill}
                    </Header>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Skill;