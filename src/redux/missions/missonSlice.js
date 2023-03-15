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
    addMission: (state, action) => {
      console.log('hello from addMissions', state, action);
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
      }));
      return {
        ...state,
        missions,
        isLoading: false,
      };
    });
  },
});

export default missionSlice.reducer;
