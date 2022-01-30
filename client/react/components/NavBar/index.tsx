import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';

library.add(faBars);

const Wrapper = styled.div`
    display: block;
    height: 80px;

    @media screen and (min-width: 480px) {
        display: flex;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;

const HamburgerIcon = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    display: block;
    float: right;
    font-size: 30px;
    outline: none;

    @media screen and (min-width: 480px) {
        display: none;
    }
`;

const Logo = styled.div`
    background-image: url(${({ theme }) => theme.logoUrl});
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    vertical-align: middle;
    width: 56px;

    @media screen and (min-width: 480px) {
        display: inline-block;
        margin: 20px 10px 20px 20px;
    }

    @media screen and (max-width: 479px) {
        display: block;
        margin: 20px auto;
    }
`;

type NavBarProps = {
    setShow: (show: boolean) => void;
    show: boolean;
};

const NavBar = ({ setShow, show }: NavBarProps): JSX.Element => {
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <Wrapper>
            <Icons>
                <Link onClick={() => setShow(false)} to='/'>
                    <Logo />
                </Link>
                <HamburgerIcon onClick={toggleShow}>
                    <FontAwesomeIcon icon='bars' />
                </HamburgerIcon>
            </Icons>
            <NavList
                onClick={() => setShow(false)}
                show={show}
            />
        </Wrapper>
    );
};

export default memo(NavBar);
