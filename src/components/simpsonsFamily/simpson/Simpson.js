import React from 'react';
import './simpson.css'

const Simpson = ({simpson}) => {
    return (
         <li className='simpson'>
           <img className='simpson-img' src={simpson.photo} alt="pictures"/>
           <h3>{simpson.name} {simpson.surname}</h3>
           <i>age: {simpson.age} years</i>
           <p className='simpson-info'>{simpson.info}</p>
         </li>
    );
};

export default Simpson;

