
import React from 'react';
import { Icon } from '@iconify/react';
import './Task3.css';

const Task3 = () => {
  return (
    <div className="container">
      <div className="header">
        <p className="explore-text">Explore our classes and master trending skills!</p>
        <h1 className="hot-text">Dive Into What's Hot Right Now! <Icon icon="mdi:fire" /></h1>
      </div>
      <div className="cards">
        <div className="card main-card">
          <div className="icons">
            <Icon icon="mdi:atom" />
            <Icon icon="mdi:heart" />
            <Icon icon="mdi:vuejs" />
            <Icon icon="mdi:brush" />
          </div>
          <h2>23+ All Courses</h2>
          <p>courses you're powering through right now.</p>
          <button className="view-button">View all Courses</button>
        </div>
        <div className="card upcoming-card">
          <h2>05+</h2>
          <p>Upcoming exciting new courses waiting to boost your skills</p>
        </div>
        <div className="card ongoing-card">
          <h2>10+</h2>
          <p>Ongoing courses currently happening—don’t miss out on the action!</p>
        </div>
      </div>
    </div>
  );
};

export default Task3;