import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';

library.add(faBars);

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    display: block;
    height: 80px;

    @media screen and (min-width: 480px) {
        display: flex;
    }
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
    setTheme: (theme: string) => void;
    theme: string;
};

const NavBar = ({ setTheme, theme }: NavBarProps): JSX.Element => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <Wrapper>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                <Link to='/'>
                    <Logo />
                </Link>
                <HamburgerIcon onClick={toggleShow}>
                    <FontAwesomeIcon icon='bars' />
                </HamburgerIcon>
            </div>
            <NavList
                setTheme={setTheme}
                show={show}
                theme={theme}
                toggleShow={toggleShow}
            />
        </Wrapper>
    );
};

export default memo(NavBar);
