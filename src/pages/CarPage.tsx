import React from 'react';

import {CarForm, Cars} from "../components";

const CarPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};