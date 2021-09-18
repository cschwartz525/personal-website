import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';

library.add(faBars, faMoon, faSun);

type WrapperProps = {
    show: boolean;
};

const Wrapper = styled.div<WrapperProps>`
    @media screen and (min-width: 480px) {
        display: block;
    }

    @media screen and (max-width: 479px) {
        background-color: black;
        bottom: 0;
        display: ${({ show }) => show ? 'block' : 'none'};
        height: ${({ show }) => show ? '100vh' : '0'};
        left: 0;
        position: relative;
        right: 0;
        top: 0;
    }
`;

const Logo = styled.div`
    background-image: url(${({ theme }) => theme.logoUrl});
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 56px;
    margin: 20px 10px 20px 20px;
    vertical-align: middle;

    @media screen and (min-width: 480px) {
        display: inline-block;
    }

    @media screen and (max-width: 479px) {
        display: block;
    }
`;

const ThemeButton = styled.button`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => `2px solid ${theme.color}`};
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    margin: 20px;
    width: 40px;

    @media screen and (min-width: 480px) {
        display: inline-block;
        float: right;
    }

    @media screen and (max-width: 479px) {
        display: block;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.backgroundColor};
    }
`;

type NavBarProps = {
    setTheme: (theme: string) => void;
    show: boolean;
    theme: string;
};

const NavList = ({ setTheme, show, theme }: NavBarProps): JSX.Element => {
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <Wrapper show={show}>
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
            <ThemeButton onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? 'moon' : 'sun'} />
            </ThemeButton>
        </Wrapper>
    );
};

export default memo(NavList);
