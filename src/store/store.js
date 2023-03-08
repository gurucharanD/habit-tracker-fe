import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './toggleSlice';
import authSlice from './authSlice';
import habitSlice from './habitSlice';

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    auth: authSlice.reducer,
    habit: habitSlice.reducer
  }
});

export default store;