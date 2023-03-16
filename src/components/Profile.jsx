import React from 'react';
import styled from 'styled-components';
import MissonReserve from './profileComponent/MissonReserve';

const Profile = () => (
  <DivWrapper data-testid="Profile">
    <MissonReserve />
    <div><h4>My Rockets</h4></div>
  </DivWrapper>
);

const DivWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 3rem auto;
  justify-content: space-between;
  div {
    width: 45%;
  }
`;

export default Profile;
