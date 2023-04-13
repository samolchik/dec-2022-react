import React, {useState} from 'react';
import '../launches.css'

const Launch = ({launch}) => {


    return (
        <li className={'launch'}>
            <h4>{launch.mission_name}</h4>
            <p>flight number: {launch.flight_number}</p>
           <h4>{launch.launch_year}</h4>
            <img src={launch.links.mission_patch_small} alt='img'/>
        </li>
    );
};

export default Launch;