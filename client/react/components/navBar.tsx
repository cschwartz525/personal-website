import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './navItem';
import colors from '../styles/colors';

const Wrapper = styled.div`
    height: 80px;
    background-color: ${colors.white};
`;

const Logo = styled.img`
    display: inline-block;
    height: 40px;
    width: 50px;
    margin: 10px;
    padding: 10px;
    vertical-align: middle;
`;

const NavBar = (): JSX.Element => (
    <Wrapper>
        <Link to='/'>
            <Logo src='assets/images/logo.png' />
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
    </Wrapper>
);

export default memo(NavBar);
