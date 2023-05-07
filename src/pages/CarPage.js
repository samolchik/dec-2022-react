import React from 'react';
import {useSelector} from "react-redux";

import {CarForm, Cars} from "../components";

const CarPage = () => {
    const {loading, error} = useSelector(state => state.cars);

    return (
        <div className={'cars-page'}>
            <CarForm/>
            {error && <h3>{JSON.stringify(error)}</h3>}
            {loading && <h1>Loading...</h1>}
            <hr/>
            <Cars/>
        </div>
    )
};

export {CarPage};