import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/car.service";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARS, carActions, UPDATE_CARS} from "../reducers/actions/car.actions";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);


    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: {
            isValid
        }
    } = useForm({mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const addNewCar = async (car) => {
        const {data} = await carService.create(car);
        dispatch(carActions.addCar(data))
        // dispatch(carActions.setTrigger())
        reset();
    };

    const updateCar = async (car) => {
        const {data} = await carService.updateById(carForUpdate.id, car);
        // dispatch({type: UPDATE_CARS, payload: data})
        console.log(carForUpdate.id);
        dispatch(carActions.setTrigger());
        reset();
        dispatch(carActions.setCarForUpdate(null))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : addNewCar)}>
                <input type='text' placeholder={'brand'} {...register('brand')}/>
                <input type='text' placeholder={'price'} {...register('price')} />
                <input type='text' placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
}

export default CarForm;