import {createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({name, number}) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
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

export const { addContact, deleteContact } = contactsSlice.actions;
 
// Selector
export const getContacts = state => state.contacts;