import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUseState} from "../../types/useState.type";
import {ICar} from "../../interfaces/car.interface";
import {carValidator} from "../../validators/car.validator";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import './cars.css';

interface IProps {
    setAllCars: IUseState<boolean>,
    setUpdateCar: IUseState<ICar | null>,
    updateCar: ICar | null
}

const CarForm: FC<IProps> = ({setAllCars, updateCar, setUpdateCar}) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors, isValid}
    } = useForm<ICar>({mode: "all", resolver: joiResolver(carValidator)});

    // useEffect(() => {
    //     if (updateCar) {
    //         setValue('brand', updateCar.brand, {shouldValidate: true});
    //         setValue('price', updateCar.price, {shouldValidate: true});
    //         setValue('year', updateCar.year, {shouldValidate: true});
    //     }
    // }, [updateCar])

    useEffect(()=>{
        if(updateCar){
            Object.entries(updateCar).forEach(([key, value]) => {
                if (key != 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [updateCar]);

    const saveCar: SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev); // але нажаль не працює, треба перезавантажувати сторінку
        reset();
        console.log(data);
    };

    const update: SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.updateById(updateCar!.id, car);
        setAllCars(prev => !prev);
        reset();
        setUpdateCar(null);
    };

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