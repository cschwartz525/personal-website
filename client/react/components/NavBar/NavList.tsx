import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';

type WrapperProps = {
    show: boolean;
};

const Wrapper = styled.div<WrapperProps>`
    @media screen and (min-width: 480px) {
        display: block;
    }

    @media screen and (max-width: 479px) {
        background-color: ${({ theme }) => theme.backgroundColor};
        bottom: 0;
        display: ${({ show }) => show ? 'block' : 'none'};
        height: ${({ show }) => show ? '100vh' : '0'};
        left: 0;
        position: relative;
        right: 0;
        top: 0;
        z-index: 1;
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

const ThemeButton = styled.button`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => `2px solid ${theme.color}`};
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    width: 40px;

    @media screen and (min-width: 480px) {
        display: inline-block;
        float: right;
        margin: 20px;
    }

    @media screen and (max-width: 479px) {
        display: block;
        margin: 20px auto;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.backgroundColor};
    }
`;

type NavListProps = {
    setTheme: (theme: string) => void;
    show: boolean;
    theme: string;
    toggleShow: () => void;
};

const NavList = ({ setTheme, show, theme, toggleShow }: NavListProps): JSX.Element => {
    return (
        <Wrapper
            onClick={toggleShow}
            show={show}
        >
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
            <ThemeToggle
                setTheme={setTheme}
                theme={theme}
            />
        </Wrapper>
    );
};

export default memo(NavList);
