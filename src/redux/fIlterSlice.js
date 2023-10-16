const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFiltervalue(state, action) {
            return action.payload;
        }
    }
})

export const { changeFiltervalue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
