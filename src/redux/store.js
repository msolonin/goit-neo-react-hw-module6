import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import {filterReducer} from "./filtersSlice.js";
import {contactsReducer} from "./contactsSlice.js";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'



// const initialState = {
//   contacts: {
// 		items: []
// 	},
//   filters: {
// 		name: ""
// 	}
// }

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = {
	contacts: persistedContactsReducer,
	filter: filterReducer,
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)