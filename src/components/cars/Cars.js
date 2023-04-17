import React, {useEffect, useState} from 'react';
import Car from "../car/Car";
import './cars.css';
import {carService} from "../../services/car.service";
import CarForm from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(cars => setCars(cars))
    }, [allCars])

    return (
        <>
            <CarForm setAllCars={setAllCars} updateCar={updateCar}/>
            <hr/>
            <ul className='cars'>
                {
                    cars.map(car => (<Car
                        key={car.id}
                        car={car}
                        setUpdateCar={setUpdateCar}
                        setAllCars={setAllCars}
                    />))
                }
            </ul>
        </>
    );
};

export default Cars;