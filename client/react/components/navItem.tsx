import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItemProps = {
    content: string;
    link: string;
};

const NavItem = ({
    content,
    link
}: NavItemProps): JSX.Element => {
    const location = useLocation();
    const status = `/${link}` === location.pathname ? 'active' : 'inactive';

    return (
        <Link to={`/${link}`}>
            <div className={`nav-item no-select hvr-bounce-in ${status}`}>
                {content}
            </div>
        </Link>
    );
};

export default memo(NavItem);
