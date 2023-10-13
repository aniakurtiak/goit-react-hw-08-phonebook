import {createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.find(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    },
})

const persistConfig = {
  key: 'contacts',
  storage,
}


export const persistedContact = persistReducer(persistConfig, contactsSlice.reducer)
export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
