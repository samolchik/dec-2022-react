import React, {useEffect} from 'react';

import {carActions} from "../../redux";
import {Car} from "../Car";
import {useAppDispatch, useAppSelector} from "../../hooks";
import './cars.css';

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger, dispatch])

    return (
        <div className={'cars'}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};