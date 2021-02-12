import React from 'react';
import { Divider, Sticky } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import MainImage from './components/MainImage';
import Bio from './components/Bio';
import SkillsGroup from './components/SkillsGroup/SkillsGroup';
import ProjectList from './components/projects/ProjectList';
import Contact from './components/contact/Contact';
import ImageHeader from './components/ImageHeader/ImageHeader';
import NameAndTitle from './components/NameAndTitle/NameAndTitle';

import chopWood from './images/animat-chop-wood-color.gif';
import rocket from './images/animat-rocket-color.gif';

class App extends React.Component {
    state = { theme: 'Light' }

    toggleTheme = () => {
        if (this.state.theme === 'Light') {
            this.setState({ theme: 'Dark' });
        } else if (this.state.theme === 'Dark') {
            this.setState({ theme: 'Light' })
        }
    }

    themeClassName = (lightParam, darkParam) => {
        return this.state.theme === 'Light' ? lightParam : darkParam;
    }

    render() {
        return (
            <div style={{ backgroundColor: this.themeClassName('', '#121212'), transition: '200ms' }}>
                <Sticky>
                    <Navbar
                        toggleTheme={this.toggleTheme}
                        themeClassName={this.themeClassName}
                    />
                </Sticky>
                <NameAndTitle />
                <MainImage />
                <Bio />
                <ImageHeader
                    themeClassName={this.themeClassName}
                    imgSrc={chopWood}
                    headerText='Skills and Tools'
                />
                <SkillsGroup
                    themeClassName={this.themeClassName}
                    state={this.state}
                />
                <ImageHeader
                    themeClassName={this.themeClassName}
                    imgSrc={rocket}
                    headerText='Featured Projects'
                />
                <ProjectList themeClassName={this.themeClassName} />
                <Divider hidden />
                <Contact />
            </div>
        );
    }
}

export default App;