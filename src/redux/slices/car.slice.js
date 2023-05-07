import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            await new Promise(resolve => setTimeout(resolve, 1000))

            return data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk (
    'carSlice/deleteCar',
    async ({id}, thunkAPI)=> {
        try {
            await carService.deleteById(id)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const sliceCar = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]:(state, action) => {
    //         state.cars = action.payload;
    //     },
    //     [create.fulfilled]:state =>{;
    //         state.trigger = !state.trigger;
    //     }
    // }
    // extraReducers: builder =>
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.cars = action.payload;
    //             state.loading = false;
    //         })
    //         .addCase(getAll.pending, state => {
    //             state.loading = true;
    //         })
    //         .addCase(create.fulfilled, state => {
    //             state.trigger = !state.trigger;
    //             state.loading = false;
    //
    //         })
    //         .addCase(create.pending, state => {
    //             state.loading = true;
    //         })
    //         .addCase(create.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.loading = false;
    //         })
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            // .addCase(create.fulfilled, state => {
            //     state.trigger = !state.trigger;
            // })
            .addCase(update.fulfilled, state => {
                // state.trigger = !state.trigger;
                state.carForUpdate = null;
            })
            .addMatcher(isPending(), (state) => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addMatcher(isFulfilled(update, create, deleteCar), state => {
                state.trigger = !state.trigger
            })
});

const {reducer: carReducer, actions} = sliceCar;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
};

export {
    carActions,
    carReducer
};


