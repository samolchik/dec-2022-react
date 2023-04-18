import {useEffect, useState} from 'react';
import {ICar} from '../../interfaces/car.interface';
import {carService} from '../../services/car.service';
import Car from "./Car"
import './cars.css';
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [allCars, setAllCars] = useState<boolean>(false);
    const [updateCar, setUpdateCar] = useState<any>(); // не можу збагнути, який правильно тип вказати, поставила поки any

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [])

    return (
        <div className={'container'}>
            <CarForm setAllCars={setAllCars} updateCar={updateCar}/>
            <hr/>
            <ul className={'cars'}>
                {cars.map(car => (<Car car={car} key={car.id} setAllCars={setAllCars} setUpdateCar={setUpdateCar}/>))}
            </ul>
        </div>
    );
};

export {Cars};

export default Cars;