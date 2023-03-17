import React from 'react';
import styled from 'styled-components';
import { MissonReserve, RocketReserve } from './profileComponent/MissonReserve';

const Profile = () => (
  <DivWrapper data-testid="Profile">
    <MissonReserve />
    <RocketReserve />
  </DivWrapper>
);

const DivWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 3rem auto;
  justify-content: space-between;
  gap: 6rem;
  div {
    width: 100%;
  }
`;

export default Profile;
