import React, { Component } from 'react';
import { render } from 'react-dom';

const Nav = (props) => {
  return (
    <div>
      <button className="navBtn">Methods</button>
      <button className="navBtn">Reagents</button>
      <button className="navBtn">Departments</button>
      <button className="navBtn">Users</button>
    </div>
  );
};

export default Nav;
