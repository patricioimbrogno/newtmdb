import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './search'
import userReducer from './user'
import switchReducer from './switch'


const store = configureStore({
  reducer: {
    search: searchReducer,
    users: userReducer,
    switch: switchReducer,
  },
});

export default store;