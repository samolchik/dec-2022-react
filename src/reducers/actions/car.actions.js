const SET_CARS = 'SET_CARS';
const ADD_CARS = 'ADD_CARS';
const UPDATE_CARS = 'UPDATE_CARS';
const TRIGGER = 'TRIGGER';


const carActions ={
    setAll: (cars) => ({type: SET_CARS, payload: cars}),
    addCar: (car) => ({type: ADD_CARS, payload: car}),
    setCarForUpdate: (car) => ({type: UPDATE_CARS, payload: car}),
    setTrigger: () => ({type: TRIGGER})
}
export {
    SET_CARS,
    ADD_CARS,
    UPDATE_CARS,
    TRIGGER,
    carActions
};
