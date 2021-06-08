import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './navItem';

const NavBar = (): JSX.Element => (
    <div id='navbar'>
        <Link to='/'>
            <img id='navbar-logo' src='assets/images/logo.png' />
        </Link>
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
