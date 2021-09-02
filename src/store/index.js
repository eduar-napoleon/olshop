import { configureStore } from '@reduxjs/toolkit';
import  {regisSlice, regisUser } from './features/auth/registerSlice'; 
export default configureStore({
  reducer: {
    register: regisSlice.reducer
  },
});