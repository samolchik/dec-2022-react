import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars, updateCar}) => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors, isValid}
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true});
            setValue('price', updateCar.price, {shouldValidate: true});
            setValue('year', updateCar.year, {shouldValidate: true});
        }
    }, [updateCar])

    const saveCar = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev);
        reset();
    }

    const update = async (car) => {
        const {data} = await carService.updateById(updateCar.id, car);
        setAllCars(prev => !prev);
        reset();
    }

    return (
        <form className={'car-form'} onSubmit={handleSubmit(updateCar ? update : saveCar)}>
            <h2>CREATE or UPDATE CAR</h2>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span className={'errors'}>{errors.brand.message}</span>}

            <input type={'text'} placeholder={'price'} {...register('price')}/>
            {errors.price && <span className={'errors'}>{errors.price.message}</span>}

            <input type={'text'} placeholder={'year'} {...register('year')}/>
            {errors.year && <span className={'errors'}>{errors.year.message}</span>}

            <button className={'car-btn'} disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CarForm;