import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';

const Navigation = () => (
  <NavWrapper>
    <div className="logo-wrapper">
      <img src={logo} alt="" />
      <h2>Space Traveller&apos;s Hub</h2>
    </div>
    <ul className="menu">
      <Link to="/"><li>Rockets</li></Link>
      <Link to="/missions"><li>Missons</li></Link>
      <div className="line" />
      <Link to="/profile"><li>MyProfile</li></Link>
    </ul>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
  flex-wrap: wrap;
  img {
    height: 3rem;
  }

  .logo-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 300px;
  }

  .line {
    width: 1px;
    height: 20px;
    background-color: black;
    transform: rotate(0deg);
  }

  ul {
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;
    max-width: 300px;
  }
`;

export default Navigation;
