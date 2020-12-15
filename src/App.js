import React from 'react';
import { Divider } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import NameAndTitle from './components/NameAndTitle';
import MainImage from './components/MainImage';
import Bio from './components/Bio';
import SkillList from './components/skills/SkillList';
import ProjectList from './components/projects/ProjectList';
import Contact from './components/contact/Contact';

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
                <Navbar
                    toggleTheme={this.toggleTheme}
                    themeClassName={this.themeClassName}
                />
                <Divider hidden />
                <NameAndTitle themeClassName={this.themeClassName} />
                <MainImage />
                <Bio />
                <Divider hidden />
                    <SkillList
                        themeClassName={this.themeClassName}
                        title={'Skills I have:'}
                        data={skillData}
                        dataLength={skillData.length}
                    />
                <Divider hidden />
                <SkillList
                    themeClassName={this.themeClassName}
                    title={'Tools I use:'}
                    data={this.filterToolData()}
                    dataLength={this.filterToolData().length}
                />
                <Divider hidden />
                <ProjectList themeClassName={this.themeClassName} />
                <Divider hidden />
                <Contact />
            </div>
        );
    }
}

export default App;