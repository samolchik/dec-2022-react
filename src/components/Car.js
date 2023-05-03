import React from 'react';
import {useDispatch} from "react-redux";
import {carActions, DEL_CARS} from "../reducers/actions/car.actions";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch({type: DEL_CARS, payload: {id}})}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
        </div>
    );
};

export default Car;