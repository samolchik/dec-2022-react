import {FC} from 'react';
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useAppDispatch();

    // const deleteCar = async () => {
    //     await dispatch(carActions.remove({id: car.id}))
    // };

    return (
        <div className={'car'}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={'btns'}>
                <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
                <button onClick={() => dispatch(carActions.remove({id}))}>Delete</button>
            </div>
        </div>
    );
};


export {Car};