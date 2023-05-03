import {
    ADD_CARS,
    DEL_CARS,
    SET_CARS,
    TRIGGER,
    UPDATE_CARS
} from "../actions/car.actions";

const initState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const carReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_CARS:
        console.log(action)
            return {...state, cars: action.payload};
        case ADD_CARS:
            return {...state, cars: [...state.cars, action.payload]};
        case UPDATE_CARS:
            return {...state, carForUpdate: action.payload};
        case DEL_CARS:
            return {...state, cars: state.cars.filter(car=> car.id !== action.payload.id)};
        case TRIGGER:
            return {...state, trigger: !state.trigger}
        default:
            return {...state}
    }
};

export {
    carReducer
};
