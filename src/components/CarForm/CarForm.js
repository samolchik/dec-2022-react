import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carActions} from "../../redux";
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {isValid, errors}
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue])

    const saveCar = async (car) => {
        const {data} = await carService.create(car);
        dispatch(carActions.addCar(data));
        dispatch(carActions.changeTrigger());
        reset();
    }

    const updateCar = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carActions.changeTrigger());
        reset();
    }

    return (
        <form className={'car-form'} onSubmit={handleSubmit(carForUpdate ? updateCar : saveCar)}>
            <h3>Add or update car</h3>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span className={'errors'}>{errors.brand.message}</span>}
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            {errors.price && <span className={'errors'}>{errors.price.message}</span>}
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            {errors.year && <span className={'errors'}>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};