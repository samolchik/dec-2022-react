import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car";
import {CarForm} from "../CarForm";
import {carActions} from "../../redux";
import {carService} from "../../services";
import './cars.css';

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setCars(value)))
    }, [dispatch, trigger])


    return (
        <div className={'cars-page'}>
            <CarForm/>
            <hr/>
            <div className={'cars'}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>

        </div>
    )
};

export {Cars};