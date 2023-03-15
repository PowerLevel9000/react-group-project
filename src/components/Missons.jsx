/* eslint-disable */

import React from 'react';
import { getMissions } from '../redux/missions/missonSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Missions = () => {
  const {mission : {missions: mission}} = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMissions());
  },[]);
  console.log(mission);
  const missionComponents = mission.map((mission)=>
    <p>{mission.description}</p>
  )
  console.log(missionComponents)
  return (
    <div>
      <h1>Hello from missions</h1>
      {missionComponents}
    </div>
  )
};

export default Missions;
