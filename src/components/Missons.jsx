import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { toggleMission } from '../redux/missions/missonSlice';

const Missions = () => {
  const { mission: { missions: mission, isLoading: loading } } = useSelector((store) => store);
  const dispatch = useDispatch();
  const missionComponents = mission.map((mission) => (
    <tr key={mission.mission_id}>
      <th>{mission.mission_name}</th>
      <td>{mission.description}</td>
      <td>{mission.isReserved ? <span className="active">Active Member</span> : <span className="active nam">Not A Member</span>}</td>
      <td>{mission.isReserved ? <button className="leave" onClick={() => dispatch(toggleMission(mission.mission_id))} type="button">Leave Mission</button> : <button onClick={() => dispatch(toggleMission(mission.mission_id))} type="button">Join Mission</button>}</td>
    </tr>
  ));
  return (
    <div data-testid="missions">
      {loading ? (
        <div className="loader">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
          />
        </div>
      ) : (
        <TableWrapper>
          <tr>
            <th>Mission</th>
            <th>Discription</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          {missionComponents}
        </TableWrapper>
      )}

    </div>
  );
};

const TableWrapper = styled.table`
  margin: 1rem 3rem;
  border: 1px solid #ddd; 

  td,
  th {
    border-left: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
    padding: 8px;
  }

  th:first-of-type {
    text-align: left;
    border-left : none;
  }

  tr:first-of-type th {
    border-top: none;
  }

  th:nth-of-type(2) {
    width: 70%;
  }

  th:nth-of-type(1) {
    width: 10%;
    vertical-align: top;
    text-align: left
  }

  th:nth-of-type(3),
  td:nth-of-type(3),
  th:nth-of-type(4),
  td:nth-of-type(4) {
    width: 10%;
    text-align: center;
    min-width: 120px;
  }

  tr {
    border-right: 1px solid #dddddd;
    &:last-child {
      border-bottom: 1px solid #dddddd;
    }
  }

  tr:nth-child(even) {
    background-color: #eee;
  }

  .active {
    background: rgb(27, 158, 191);
    color: #fff;
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
    margin-right: 2%;
  }

  .nam {
    background: #777;
  }

  button {
    background-color: transparent;
    border-radius: 5px;
    border-color: #666;
    padding: .4rem .5rem
  }

  .leave {
    border-color: #ff0000;
    color: #f50000;
  }
`;

export default Missions;
