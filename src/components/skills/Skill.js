import React from 'react';
import { Image, Header, Transition, Grid } from 'semantic-ui-react';

import './Skill.css';

class Skill extends React.Component {
    state = { visible: true }

    toggleVisibility = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }

    render() {
        return (
            <Grid onMouseOver={this.toggleVisibility} >
                <Grid.Column>
                    <Header as='h3' inverted={this.props.themeClassName(false, true)}>
                        <Transition
                            animation='jiggle'
                            visible={this.state.visible}
                            duration={500}
                        >
                            <Image
                                alt='logo'
                                src={this.props.imageSource}
                                id='skillImage'
                            />
                        </Transition>
                        {this.props.skill}
                    </Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Skill;