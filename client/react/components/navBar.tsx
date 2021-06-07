import React, { memo } from 'react';
import NavItem from './navItem';

const NavBar = (): JSX.Element => (
    <div id='navbar'>
        <img id='navbar-logo' src='assets/images/logo.png' />
        <NavItem
            content='About'
            link='about'
        />
        <NavItem
            content='Resume'
            link='resume'
        />
        <NavItem
            content='Contact'
            link='contact'
        />
    </div>
);

export default memo(NavBar);
