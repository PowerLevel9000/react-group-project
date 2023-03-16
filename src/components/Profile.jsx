import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { mission: { missions } } = useSelector((store) => store);
  const reservedMissionComponent = missions.filter((mission) => mission.isReserved)
    .map((mission) => (
      <div key={mission.mission_id}>
        <h1>{mission.mission_name}</h1>
        <p>{mission.description}</p>
      </div>
    ));
  return (
    <div>
      {reservedMissionComponent}
    </div>
  );
};

export default Profile;
