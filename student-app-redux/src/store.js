import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../src/slice/studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});
