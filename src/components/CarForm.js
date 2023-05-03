import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/car.service";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../reducers/actions/car.actions";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: {
            isValid,
            errors
        }
    } = useForm({mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const addCar = async (car) => {
        await carService.create(car);
        dispatch(carActions.setTrigger())
        reset();
    };

    const updateCar = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.setTrigger());
        reset();
        dispatch(carActions.setCarForUpdate(null))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : addCar)}>
                <input type='text' placeholder={'brand'} {...register('brand')}/>
                <input type='text' placeholder={'price'} {...register('price')} />
                <input type='text' placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ?'Update': 'Create'}</button>
            </form>
        </div>
    );
}

export default CarForm;