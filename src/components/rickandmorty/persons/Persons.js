import React from 'react';
import Person from "../person/Person";
import '../person/person.css'

const Persons = ({persons}) => {
    return (
        <ul className='persons'>
            {
                persons.map(person => (<Person key={person.id} person={person}/>))
            }
        </ul>
    );
};

export default Persons;