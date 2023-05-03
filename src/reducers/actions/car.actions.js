const SET_CARS = 'SET_CARS';
const ADD_CARS = 'ADD_CARS';
const DEL_CARS = 'DEL_CARS';
const UPDATE_CARS = 'UPDATE_CARS';
const TRIGGER = 'TRIGGER';


const carActions ={
    setAll: (cars) => ({type: SET_CARS, payload: cars}),
    setCarForUpdate: (car) => ({type: UPDATE_CARS, payload: car}),
    setDelete: (id) => ({type: DEL_CARS, payload: id}),
    setTrigger: () => ({type: TRIGGER})
}
export {
    SET_CARS,
    ADD_CARS,
    DEL_CARS,
    UPDATE_CARS,
    TRIGGER,
    carActions
};
