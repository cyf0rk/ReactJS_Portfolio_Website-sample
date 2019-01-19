import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><h1>LOGO</h1></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li>
                  <a href="/"><span>Home</span></a>
                </li>
                <li>
                  <a href="../projects">Projects</a>
                </li>
                <li>
                  <a href="../contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
