import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from './NavList';

library.add(faBars);

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    height: 80px;
`;

const HamburgerIcon = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    display: block;
    font-size: 30px;
    margin: 0 auto;
    outline: none;
    padding-top: 10px;

    @media screen and (min-width: 480px) {
        display: none;
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
            <HamburgerIcon onClick={toggleShow}>
                <FontAwesomeIcon icon='bars' />
            </HamburgerIcon>
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
