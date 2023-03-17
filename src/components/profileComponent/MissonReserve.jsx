import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MissonReserve = () => {
  const { mission: { missions } } = useSelector((store) => store);
  const reservedMissionComponent = missions.filter((mission) => mission.isReserved)
    .map((mission) => (
      <h4 className="list" key={mission.mission_id}>{mission.mission_name}</h4>
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
  const { rocketLists } = useSelector((store) => store.rockets);
  const reserveRockets = rocketLists.filter((rocket) => rocket.reserved && rocket)
    .map((rocket) => (
      <h4 className="list" key={rocket.id}>{rocket.name}</h4>
    ));
  return (
    <MissionWrapper>
      <h3>My Rocket</h3>
      <div>
        {
          reserveRockets.length ? reserveRockets : (
            <h4>
              you don&apos;t have any rockets
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
    box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    &:hover{
      transform: scale(1.1);
    }
    h4 {
      color: #555;
      border-bottom: 1px solid black;
      padding: 1rem 1rem;
      margin: 0;
    }

    .list:hover {
      background-color: rgba(252, 160, 160, 0.3);
    }

    h4:last-of-type {
      border: none;
    }
  }
`;

export { MissonReserve, RocketReserve };
