import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import {carService} from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteCar = async () => {
       await dispatch(carActions.deleteCar({id}))
    };

    return (
        <div className={'car'}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={'car-btns'}>
                <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
                <button onClick={deleteCar}>Delete</button>
            </div>
        </div>
    );
};

export {Car};

