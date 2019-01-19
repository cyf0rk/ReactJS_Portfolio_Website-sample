import React from "react";
import { Link } from 'react';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li><Link to="/" onClick={close} style={{ color: 'grey', textDecoration: 'none' }}>Home</Link></li>
      <hr style={{ border: '3px dotted black' }}/>
      <li><Link to="projects" onClick={close} style={{ color: 'grey', textDecoration: 'none' }}>Projects</Link></li>
      <hr style={{ border: '3px dotted black' }}/>
      <li><Link to="contact" onClick={close} style={{ color: 'grey', textDecoration: 'none' }}>Contact</Link></li>
    </ul>
  </div>
);
