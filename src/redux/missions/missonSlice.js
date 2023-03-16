/* eslint-disable */ 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

//  initial State

const initialState = {
  missions: [],
  isLoading: false,
};

//  async thunk

export const getMissions = createAsyncThunk('/missions/getMission', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

//  mission Slice

const missionSlice = createSlice({
  name: 'missionState',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const missionId = action.payload;
      // console.log('Current state:', state);
      // console.log('Mission ID:', missionId);
      // console.log('First mission:', { ...state.missions[0] });
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      // console.log('Found mission:', { ...mission });
      if (mission) {
        mission.isReserved = true;
      }
      // console.log('Found mission:', { ...mission });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(getMissions.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));

    builder.addCase(getMissions.fulfilled, (state, action) => {
      const missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        isReserved: false,
      }));
      return {
        ...state,
        missions,
        isLoading: false,
      };
    });
  },
});

export const { reserveMission } = missionSlice.actions;
export default missionSlice.reducer;
