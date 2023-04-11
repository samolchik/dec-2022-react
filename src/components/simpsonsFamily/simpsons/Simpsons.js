import React from 'react';
import Simpson from "../simpson/Simpson";
import '../simpson/simpson.css'

const Simpsons = ({simpsons}) => {
    return (
        <ul className='simpsons'>
            {
                simpsons.map(simpson => (<Simpson key={simpson.id} simpson={simpson}/>))
            }
        </ul>
    );
};

export default Simpsons;