import {useLocation, Location} from "react-router-dom";

interface IState<T> extends Location {
    state: T
}

const useAppLocation = <D>(): IState<D> => useLocation();

export {
    useAppLocation
};