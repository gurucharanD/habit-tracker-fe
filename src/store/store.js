import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './toggleSlice';
import authSlice from './authSlice';
import habitSlice from './habitSlice';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    auth: authSlice.reducer,
    habit: habitSlice.reducer,
    ui: uiSlice.reducer
  }
});

export default store;