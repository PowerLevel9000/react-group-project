import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { getMissions, reserveMission } from '../redux/missions/missonSlice';

const Missions = () => {
  const { mission: { missions: mission, isLoading: loading } } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []); // we don't need dependency array
  // console.log(mission, loading); // this console logs are important
  const missionComponents = mission.map((mission) => (
    <div key={mission.mission_id}>
      <h4>{mission.mission_name}</h4>
      <p>{mission.description}</p>
      <button onClick={() => dispatch(reserveMission(mission.mission_id))} type="button">join</button>
    </div>
  ));
  // console.log(missionComponents); // this console logs are important
  return (
    <div>
      {loading ? (
        <div className="loader">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
          />
        </div>
      ) : (
        <>
          {missionComponents}
        </>
      )}

    </div>
  );
};

export default Missions;
