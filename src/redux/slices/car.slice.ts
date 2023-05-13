import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {ICar, IError, IPagination} from "../../interfaces";
import {carService} from "../../services";


interface IState {
    cars: ICar[],
    prev: string;
    next: string,
    carForUpdate: ICar,
    errors: IError,
    trigger: boolean,
}

const initialState: IState = {
    cars: [],
    prev: null,
    next: null,
    carForUpdate: null,
    errors: null,
    trigger: false,
};

const getAll = createAsyncThunk<IPagination<ICar[]>, void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;

        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const update = createAsyncThunk<void, { car: ICar, id: number }>(
    'carSlice/update',
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const remove = createAsyncThunk < void, {id: number}>(
    'carSlice/delete',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.delete(id)
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);


const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {items, prev, next} = action.payload;
                state.cars = items;
                state.prev = prev;
                state.next = next;
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(create, update, remove), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload;
            })

});

const {actions, reducer: carReducer} = slice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    remove
};

export {
    carActions,
    carReducer
};
