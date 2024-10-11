import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	contacts: [],
}

const postSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, { payload }) => {
			state.contacts.push(payload)
		},
		deleteContact: (state, { payload }) => {
			console.log(payload, state.posts)
			state.contacts = state.contacts.filter((el) => el.id !== payload)
		},
	},
})

export const { addContact, deleteContact } = postSlice.actions
export const selectContacts = (state) => state.contacts.contacts;
export const contactsReducer = postSlice.reducer
