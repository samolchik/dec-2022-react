import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form"

import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import './carForm.css';

const CarForm: FC = () => {
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {isValid}
    } = useForm<ICar>({mode: "all"});

    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.cars);

    useEffect(()=>{
        if(carForUpdate){
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate, setValue]);

    const saveCar: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    };

    const updateCar: SubmitHandler<ICar> = async (car) => {
        dispatch(carActions.update({id: carForUpdate.id, car}));
        reset();
    };

    return (
        <form className={'form'} onSubmit={handleSubmit(carForUpdate ? updateCar: saveCar)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};