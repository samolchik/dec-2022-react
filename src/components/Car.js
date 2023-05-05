import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../reducers/actions/car.actions";
import {carService} from "../services/car.service";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const delCar = async () => {
        await carService.delete(id);
        dispatch(carActions.setTrigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={delCar}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
        </div>
    );
};

export default Car;