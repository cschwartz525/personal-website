import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';

type NavItemProps = {
    content: string;
    link: string;
};

const NavLink = styled(Link)`
    background: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.nav.color};
    letter-spacing: 3px;
    margin: 0 20px;
    padding: 10px 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;

    @media screen and (min-width: 480px) {
        display: inline-block;
    }

    @media screen and (max-width: 479px) {
        display: block;
        margin: 10px auto;
        text-align: center;
    }

    &.active {
        border-bottom: 3px solid ${({ theme }) => theme.nav.color};
    }

    &:after {
        background: ${({ theme }) => theme.nav.hoverColor};;
        bottom: -3px;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        right: 100%;
        transition: 0.2s ease-in-out;
    }

    &:hover:after {
        right: 0;
        transition: 0.2s ease-in-out;
    }
`;

const NavItem = ({
    content,
    link
}: NavItemProps): JSX.Element => {
    const location = useLocation();
    const status = location.pathname.startsWith(`/${link}`) ? 'active' : 'inactive';

    return (
        <NavLink className={`no-select ${status}`} to={`/${link}`}>
            {content}
        </NavLink>
    );
};

export default memo(NavItem);
