import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './navItem';
import colors from '../styles/colors';

const Wrapper = styled.div`
    height: 80px;
    background-color: ${colors.white};
`;

const Logo = styled.div`
    background-image: url('/assets/images/logo_black.png');
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 40px;
    width: 56px;
    margin: 20px 10px 20px 20px;
    vertical-align: middle;
`;

const NavBar = (): JSX.Element => (
    <Wrapper>
        <Link to='/'>
            <Logo />
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
