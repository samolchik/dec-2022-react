import React from 'react';
import './person.css'

const Person = ({person}) => {
    return (
        <li className='person'>
            <h2>{person.name}</h2>
            <img className='person-img' src={person.image} alt="pictures"/>
            <p>id: {person.id}</p>
            <p>status: {person.status}</p>
            <p>species: {person.species}</p>
            <p>gender: {person.gender}</p>
        </li>
    );
};

export default Person;