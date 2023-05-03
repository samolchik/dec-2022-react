import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const sliceCar = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: state => {
            state.trigger = !state.trigger
        }
    }
});

const {reducer: carReducer, actions} = sliceCar;

const carActions = {
    ...actions
};

export {
    carActions,
    carReducer
};


