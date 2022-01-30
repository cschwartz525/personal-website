import React, { memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faMoon, faSun);

const ThemeButton = styled.button`
    align-items: center;
    background-color: transparent;
    border: ${({ theme }) => `2px solid ${theme.color}`};
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    justify-content: center;
    width: 40px;

    @media screen and (min-width: 480px) {
        display: inline-flex;
        float: right;
        margin: 20px;
    }

    @media screen and (max-width: 479px) {
        display: flex;
        margin: 20px auto;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.backgroundColor};
    }
`;

type ThemeToggleProps = {
    setTheme: (theme: string) => void;
    theme: string;
};

const ThemeToggle = ({ setTheme, theme }: ThemeToggleProps): JSX.Element => {
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeButton onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === 'light' ? 'moon' : 'sun'} />
        </ThemeButton>
    );
};

export default memo(ThemeToggle);
