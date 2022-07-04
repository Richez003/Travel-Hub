import React from 'react';
import { NavLink } from 'react-router-dom';
import spaceIcon from '../assets/spaceIcon.png';
import './NavLink.css';

const NavBar = () => (
  <nav>
    <img className="progress-circle" alt="progress-circle" src={spaceIcon} />
    <h3>Space Traveler&apos;s Hub</h3>
    <div className="links">
      <ul>
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/my-profile">My Profile</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
