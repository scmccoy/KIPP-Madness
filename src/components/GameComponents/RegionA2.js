import React from 'react';
import Round64 from './Round64';
// import Round32 from './Round32';
// import Round16 from './Round16';
// import Round8 from './Round8';
import {filterByRegion} from '../../helper.js';

class RegionA2 extends React.Component {

    render() {
        const teams = filterByRegion("West", this.props.TeamData.teams);

        return (
            <div className="region__A">
                <Round64 update={this.props.update} TeamData={teams}></Round64>

            </div>
        );

    }
}

export default RegionA2;