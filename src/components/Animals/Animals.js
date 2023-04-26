import React, {useReducer} from 'react';

import {animalsInitState, animalsReducer} from "../../reducers/animals.reducer";
import {FaCat} from 'react-icons/fa';
import {FaDog} from 'react-icons/fa';
import './animals.css';


const Animals = () => {

    const [state, dispatch] = useReducer(animalsReducer, animalsInitState);

    const cat = <FaCat/>;
    const dog = <FaDog/>;

    return (
        <div className={'animals'}>
            <div>
                <h2>{cat} cats:</h2>
                <ul>
                    {state.cats.map((cat) => (
                        <li key={cat.index}>{cat}
                            <button className={'btn-del'}
                                    onClick={() => dispatch({type: 'DEL_CAT', payload: cat})}>Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => dispatch({type: 'ADD_CAT', payload: cat})}>Add cat</button>
            </div>

            <div>
                <h2>{dog} dogs:</h2>
                <ul>
                    {state.dogs.map((dog) => (
                        <li key={dog.index}>{dog}
                            <button className={'btn-del'}
                                    onClick={() => dispatch({type: 'DEL_DOG', payload: dog})}>Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => dispatch({type: 'ADD_DOG', payload: dog})}>Add dog</button>
            </div>
        </div>
    );
};

export default Animals;