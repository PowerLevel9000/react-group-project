/* eslint-disable */

import React from 'react';
import { getMissions } from '../redux/missions/missonSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';

const Missions = () => {
  const { mission: { missions: mission, isLoading: loading } } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  console.log(mission, loading);
  const missionComponents = mission.map((mission) =>
    <div>
      <h4>{mission.mission_name}</h4>
      <p>{mission.description}</p>
    </div>
  )
  console.log(missionComponents)
  return (
    <div>
      {loading ? (
        <div className="loader">
          <RotatingLines strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75" />
        </div>
      ) : (
        <>
          <h1>Hello from missions</h1>
          {missionComponents}
        </>
      )}

    </div>
  )
};

export default Missions;
