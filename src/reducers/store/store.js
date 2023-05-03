import {createStore} from "redux";
import {carReducer} from "../reducer/car.reducer";

export const store = createStore(carReducer)