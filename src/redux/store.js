import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missonSlice';
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
