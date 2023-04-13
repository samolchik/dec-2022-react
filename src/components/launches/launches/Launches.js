import React, {useEffect, useState} from 'react';
import {getLaunches, getUsers} from "../../../servises/servises";
import Launch from "../launch/Launch";
import '../launches.css'

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(launches => setLaunches([...launches]))
    }, [])


    const launchFilterYear = launches.filter(launch => launch.launch_year !== '2020'
    )

    return (
        <ul className='launches'>
            {
                launchFilterYear.map(launch => (<Launch key={launch.id} launch={launch}/>))
            }
        </ul>
    );
};

export default Launches;