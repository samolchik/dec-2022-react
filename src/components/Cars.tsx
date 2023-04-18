import {useEffect, useState} from 'react';
import {ICar} from '../interfaces/car.interface';
import {carService} from '../services/car.service';
import CarForm from "./CarForm";
import Car from "./Car"
import './cars.css';

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [allCars, setAllCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [])

    return (
        <div className={'container'}>
            <CarForm setAllCars={setAllCars}/>
            <hr/>
            <ul className={'cars'}>
                {cars.map(car => (<Car car={car} key={car.id}/>))}
            </ul>
        </div>
    );
};

export {Cars};

export default Cars;