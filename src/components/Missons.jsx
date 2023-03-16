import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { toggleMission } from '../redux/missions/missonSlice';

const Missions = () => {
  const { mission: { missions: mission, isLoading: loading } } = useSelector((store) => store);
  const dispatch = useDispatch();
  const missionComponents = mission.map((mission) => (
    <div key={mission.mission_id}>
      <span>{mission.isReserved && 'reserved'}</span>
      <h4>{mission.mission_name}</h4>
      <p>{mission.description}</p>
      <button onClick={() => dispatch(toggleMission(mission.mission_id))} type="button">{mission.isReserved ? 'cancel' : 'join'}</button>
    </div>
  ));
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
