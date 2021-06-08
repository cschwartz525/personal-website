import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';

type NavItemProps = {
    content: string;
    link: string;
};

const Tab = styled.div`
    display: inline-block;
    margin: 10px;
    padding: 10px;
    vertical-align: middle;
    border: 2px;
    border-color: ${colors.black};
    border-style: solid;
    border-radius: 5px;
    cursor: pointer;
    color: ${colors.black};

    &.inactive {
        background: ${colors.lightgrey};
    }

    &.active {
        color: ${colors.white};
        background: ${colors.mediumblue};
    }

    &:hover,
    &:hover.active,
    &:hover.inactive {
        color: ${colors.white};
        background: ${colors.mediumblue}; /* Old browsers */
        background: -moz-linear-gradient(top, ${colors.lightblue} 0%, ${colors.mediumblue} 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, ${colors.lightblue} 0%, ${colors.mediumblue} 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, ${colors.lightblue} 0%, ${colors.mediumblue} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors.lightblue}', endColorstr='${colors.mediumblue}',GradientType=0 ); /* IE6-9 */
    }
`;

const NavItem = ({
    content,
    link
}: NavItemProps): JSX.Element => {
    const location = useLocation();
    const status = `/${link}` === location.pathname ? 'active' : 'inactive';

    return (
        <Link to={`/${link}`}>
            <Tab className={`no-select ${status}`}>
                {content}
            </Tab>
        </Link>
    );
};

export default memo(NavItem);
