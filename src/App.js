import React from 'react';
import { Divider, Sticky } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import MainImage from './components/MainImage';
import Bio from './components/Bio';
import SkillList from './components/skills/SkillList';
import ProjectList from './components/projects/ProjectList';
import Contact from './components/contact/Contact';
import ImageHeader from './components/ImageHeader/ImageHeader';
import NameAndTitle from './components/NameAndTitle/NameAndTitle';

import chopWood from './images/animat-chop-wood-color.gif';
import rocket from './images/animat-rocket-color.gif';

import skillData from './data/SkillData';
import toolData from './data/ToolData';

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

    filterToolData () {
        let filteredToolData;

        if (this.state.theme === 'Light') {
            filteredToolData = toolData.filter(x => x.id !== 1.5 && x.id !== 5.5);
        } else {
            filteredToolData = toolData.filter(x => x.id !== 1 && x.id !== 5);
        };

        return filteredToolData;
    }

    render() {
        return (
            <div style={{ backgroundColor: this.themeClassName('', '#121212') }}>
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
                <SkillList
                    themeClassName={this.themeClassName}
                    title={'Technologies and Frameworks:'}
                    data={skillData}
                    dataLength={skillData.length}
                />
                <Divider hidden />
                <SkillList
                    themeClassName={this.themeClassName}
                    title={'Tools:'}
                    data={this.filterToolData()}
                    dataLength={this.filterToolData().length}
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