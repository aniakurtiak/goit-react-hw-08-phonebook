const { createSlice } = require("@reduxjs/toolkit");

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFiltervalue(state, action) {
            return action.payload;
        }
    }
})

export const { changeFiltervalue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selector
export const getFilter = state => state.filter;