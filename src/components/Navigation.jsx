import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('rockets');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <NavWrapper>
      {/* AS i want intractive role for this ul and its imp for testing so i disable this  */}
      {/* eslint-disable  */}
      <div role="menuitem" className="logo-wrapper">
        <Link to="/"><img src={logo} alt="" /></Link>
        <Link to="/"><h2>Space Traveller&apos;s Hub</h2></Link>
      </div>
      <ul role="menuitem" className="menu">
        <Link to="/" onClick={() => handleLinkClick('rockets')}>
          <li role="list" className={activeLink === 'rockets' ? 'active' : ''}>
            Rockets
          </li>
        </Link>
        <Link to="/missions" onClick={() => handleLinkClick('missions')}>
          <li role="list" className={activeLink === 'missions' ? 'active' : ''}>
            Missions
          </li>
        </Link>
        <div className="line" />
        <Link to="/profile" onClick={() => handleLinkClick('profile')}>
          <li role="list" className={activeLink === 'profile' ? 'active' : ''}>
            MyProfile
          </li>
        </Link>
      </ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  flex-wrap: wrap;
  img {
    height: 3rem;
  }

  .logo-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 300px;
  }

  .line {
    width: 1px;
    height: 20px;
    background-color: blue;
    transform: rotate(0deg);
  }

  ul {
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;
    max-width: 300px;

    li {
      position: relative;
      padding-bottom: 5px;
    }

    li.active:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: blue;
    }
  }

  a {
    color: blue;
    text-decoration: none;
  }
`;

export default Navigation;
