const animalsActionTypes = {
    ADD_CAT: 'ADD_CAT',
    DEL_CAT: 'DEL_CAT',
    ADD_DOG: 'ADD_DOG',
    DEL_DOG: 'DEL_DOG'
}

const animalsInitState = {
    cats: [],
    dogs: []
}

const animalsReducer = (state, action) => {
    switch (action.type) {
        case animalsActionTypes.ADD_CAT:
            return {...state, cats: [...state.cats, action.payload]};
        case animalsActionTypes.DEL_CAT:
            return {...state, cats: state.cats.filter(cat => cat !== action.payload)};
        case animalsActionTypes.ADD_DOG:
            return {...state, dogs: [...state.dogs, action.payload]};
        case animalsActionTypes.DEL_DOG:
            return {...state, dogs: state.dogs.filter(dog => dog !== action.payload)};
        default:
            return state;
    }
};

export {
    animalsInitState,
    animalsReducer
}