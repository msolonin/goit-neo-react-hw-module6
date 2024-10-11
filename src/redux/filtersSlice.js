import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '',
}


const filterSlice = createSlice({
		name: 'filter',
		initialState,
		reducers: {
		changeFilter: (state, { payload }) => {
		  state.name = payload;
		},
	},
})

export const { changeFilter } = filterSlice.actions
export const selectNameFilter = (state) => state.filter.name;
export const filterReducer = filterSlice.reducer
