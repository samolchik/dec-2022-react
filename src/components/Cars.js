import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";
import {carActions} from "../reducers/actions/car.actions";

const Cars = () => {
    const cars = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => {
            dispatch(carActions.setAll(value))
        })
    }, [dispatch])

            console.log(cars);

    return (
        <div>
            <CarForm/>
            {
                cars.map(car => (<Car key={car.id} car={car}/>))
            }
        </div>
    );
};

export default Cars;