import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import  {regisSlice, regisUser } from './features/auth/registerSlice'; 
import { allProductSlice } from './features/product/fetchProduct';

const reducers = combineReducers({
  
})

export default configureStore({
  reducer: {
    regis: regisSlice.reducer,
    products: allProductSlice.reducer
  },
});