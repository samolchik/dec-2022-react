import React, {useState} from 'react';
import '../cars/cars.css'
import {carService} from "../../services/car.service";

const Car = ({car, setUpdateCar, setAllCars}) => {

    const {
        id,
        brand,
        price,
        year
    } = car;

    const [deleteCar, setDeleteCar] = useState(null);

    const carDelete = (id) => {
        setDeleteCar(carService.delete(id))
        setAllCars(prev => !prev);
    }

    return (
        <li className='car'>
            <h3>brand: {brand}</h3>
            <i>id: {id}</i>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <div className={'car-btns'}>
                <button className={'car-button'} onClick={()=> setUpdateCar(car)}>Update</button>
                <button className={'car-button'} onClick={()=> carDelete(id)}>Delete</button>
            </div>
        </li>
    );
};

export default Car;