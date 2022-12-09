import React, { memo } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

type WrapperProps = {
    show: boolean;
};

const Wrapper = styled.div<WrapperProps>`
    @media screen and (min-width: 700px) {
        align-self: center;
        display: block;
        padding: 0 20px;
    }

    @media screen and (max-width: 699px) {
        bottom: 0;
        display: ${({ show }) => show ? 'flex' : 'none'};
        flex-direction: column;
        height: ${({ show }) => show ? '100vh' : '0'};
        left: 0;
        margin-top: 20px;
        position: relative;
        right: 0;
        top: 0;
        z-index: 1;
    }
`;

type NavListProps = {
    onClick: () => void;
    show: boolean;
};

const NavList = ({ onClick, show }: NavListProps): JSX.Element => (
    <Wrapper
        onClick={onClick}
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
            content='Portfolio'
            link='portfolio'
        />
        <NavItem
            content='Contact'
            link='contact'
        />
    </Wrapper>
);

export default memo(NavList);
