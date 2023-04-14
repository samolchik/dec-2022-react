import React, {useState} from 'react';
import '../launches.css'

const Launch = ({launch}) => {
    const {mission_name, flight_number,launch_year, links:{mission_patch_small}} = launch;

    return (
        <li className={'launch'}>
            <h4>{mission_name}</h4>
            <p>flight number: {flight_number}</p>
           <h4>{launch_year}</h4>
            <img className={'launch-img'} src={mission_patch_small} alt='img'/>
        </li>
    );
};

export default Launch;