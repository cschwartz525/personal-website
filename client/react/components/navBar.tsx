import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import NavItem from './navItem';

library.add(faMoon, faSun);

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};

    @media screen and (min-width: 480px) {
        height: 80px;
    }

    @media screen and (max-width: 479px) {
        bottom: 0;
        left: 0;
        position: fixed;
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
    theme: string;
};

const NavBar = ({ setTheme, theme }: NavBarProps): JSX.Element => {
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
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
            <ThemeButton onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? 'moon' : 'sun'} />
            </ThemeButton>
        </Wrapper>
    );
};

export default memo(NavBar);
