import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import './cars.css';
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";

interface IProps {
    car: ICar,
    setAllCars: Dispatch<SetStateAction<boolean>>,
    setUpdateCar: Dispatch<SetStateAction<object>>
}

const Car: FC<IProps> = ({car, setAllCars, setUpdateCar}) => {
    const {id, year, price, brand} = car

    const deleteCar = (id: number,) => {
        carService.delete(id);
        setAllCars(prev => !prev);
    }

    return (
        <li className={'car'}>
            <h4>brand: {brand}</h4>
            <p>id: {id}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <div className={'car-btns'}>
                <button className={'car-button'} onClick={()=> setUpdateCar(car)}>Update</button>
                <button className={'car-button'} onClick={()=> deleteCar(id)}>Delete</button>
            </div>
        </li>
    );
};

export default Car;