import React, {FC, useState} from 'react';
import './cars.css';
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car

    const deleteCar = (id: number,) => {
        carService.delete(id);
        // setAllCars(prev => !prev);
    }

    return (
        <li className={'car'}>
            <h4>brand: {brand}</h4>
            <p>id: {id}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </li>
    );
};

export default Car;