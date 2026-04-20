import { css } from 'styled-components'

export const buttonStyles = css`
    background-color: transparent;
    border: ${({ theme }) => `2px solid ${theme.color}`};
    border-radius: 20px;
    color: ${({ theme }) => theme.color};
    display: block;
    font-weight: bold;
    letter-spacing: .5px;
    text-align: center;
    text-decoration: none;
    transition: .2s;

    @media screen and (min-width: 412px) {
        margin: 0 10px;
        padding: 10px 40px;
    }

    @media screen and (max-width: 411px) {
        margin: 10px;
        padding: 10px 20px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color};
        border: ${({ theme }) => `2px solid ${theme.color}`};
        color: ${({ theme }) => theme.backgroundColor};
        cursor: pointer;
        transition: .2s;

        @media screen and (min-width: 412px) {
            margin: 0;
            padding: 10px 50px;
        }

        @media screen and (max-width: 411px) {
            margin: 0;
            padding: 10px 30px;
        }
    }
`;