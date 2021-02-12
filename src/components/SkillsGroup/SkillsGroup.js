import React from 'react';
import { Grid } from 'semantic-ui-react';

import SkillList from '../skills/SkillList';

import frontData from '../../data/FrontData';
import toolData from '../../data/ToolData';

const SkillsGroup = ({ themeClassName, state }) => {
    const filterToolData = () => {
        let filteredToolData;

        if (state.theme === 'Light') {
            filteredToolData = toolData.filter(x => x.id !== 1.5 && x.id !== 4.5);
        } else {
            filteredToolData = toolData.filter(x => x.id !== 1 && x.id !== 4);
        };

        return filteredToolData;
    }


    return (
        <Grid container stackable columns='3'>
            <Grid.Column>
                <SkillList
                    themeClassName={themeClassName}
                    title={'Frontend Technologies:'}
                    data={frontData}
                />
            </Grid.Column>
            <Grid.Column>
                <SkillList
                    themeClassName={themeClassName}
                    title={'Backend Technologies:'}
                    data={filterToolData()}
                />
            </Grid.Column>
            <Grid.Column>
                <SkillList
                    themeClassName={themeClassName}
                    title={'Other tools:'}
                    data={filterToolData()}
                />
            </Grid.Column>
        </Grid>
    );
};

export default SkillsGroup;