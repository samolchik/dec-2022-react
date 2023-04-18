import React, {Dispatch, FC, SetStateAction} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import './cars.css';

interface IProps {
    setAllCars: Dispatch<SetStateAction<ICar[]>>
}

const CarForm: FC<IProps> = ({setAllCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<ICar>()

    const saveCar: SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prevCars => [...prevCars, data])
        reset();
        console.log(data);
    };

    return (
        <form className={'car-form'} onSubmit={handleSubmit(saveCar)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button className={'car-btn'}>SAVE</button>

        </form>
    );
};

export default CarForm;