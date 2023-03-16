import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import MissionWrapper from './MissionWrapper.Jsx';

const MissonReserve = () => {
  const { mission: { missions } } = useSelector((store) => store);
  const reservedMissionComponent = missions.filter((mission) => mission.isReserved)
    .map((mission) => (
      <h4 key={mission.mission_id}>{mission.mission_name}</h4>
    ));
  return (
    <MissionWrapper>
      <h3>My Missons</h3>
      <div>
        {
          reservedMissionComponent.length ? reservedMissionComponent : (
            <h4>
              you don&apos;t have any mission
            </h4>
          )
        }
      </div>
    </MissionWrapper>
  );
};
const RocketReserve = () => {
  const { rocketLists } = useSelector((state) => state.rockets);
  const reserveRockets = rocketLists.filter((rocket) => rocket.reserved && rocket)
    .map((rocket) => (
      <h4 key={rocket.id}>{rocket.name}</h4>
    ));
  return (
    <MissionWrapper>
      <h3>My Rocket</h3>
      <div>
        {
          reserveRockets.length ? reserveRockets : (
            <h4>
              you don&apos;t have any reserved rocket
            </h4>
          )
        }
      </div>
    </MissionWrapper>
  );
};

const MissionWrapper = styled.div`
  width: 100%;
  div {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction column;
    h4 {
      color: #555;
      border-bottom: 1px solid black;
      padding: 1rem 1rem;
      margin: 0;
    }

    h4:last-of-type {
      border: none;
    }
  }
`;

export { MissonReserve, RocketReserve };
