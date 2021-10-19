import React, { memo } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';

type WrapperProps = {
    show: boolean;
};

const Wrapper = styled.div<WrapperProps>`
    @media screen and (min-width: 480px) {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 479px) {
        background-color: ${({ theme }) => theme.backgroundColor};
        bottom: 0;
        display: ${({ show }) => show ? 'block' : 'none'};
        height: ${({ show }) => show ? '100vh' : '0'};
        left: 0;
        padding-top: 20px;
        position: relative;
        right: 0;
        top: 0;
        z-index: 1;
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
