import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missonSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
