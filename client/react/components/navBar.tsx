import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './navItem';
import colors from '../styles/colors';

const Wrapper = styled.div`
    height: 80px;
    background-color: ${({ theme }) => theme.backgroundColor};
`;

const Logo = styled.div`
    background-image: url(${({ theme }) => theme.logoUrl});
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 40px;
    width: 56px;
    margin: 20px 10px 20px 20px;
    vertical-align: middle;
`;

const ThemeButton = styled.button`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => `1px solid ${theme.color}`};
    border-radius: 5px;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    float: right;
    height: 40px;
    margin: 20px;

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
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </ThemeButton>
        </Wrapper>
    );
};

export default memo(NavBar);
