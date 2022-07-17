import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 120px auto;
    padding: 0 20px;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.color};
    font-size: 3.25em;
    font-weight: bold;
    letter-spacing: 7px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (min-width: 412px) {
        font-size: 56px;
        letter-spacing: 7px;
    }

    @media screen and (max-width: 411px) {
        font-size: 48px;
        letter-spacing: 6px;
    }
`;

const Subheading = styled.h2`
    color: ${({ theme }) => theme.color};
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (min-width: 412px) {
        font-size: 20px;
    }

    @media screen and (max-width: 411px) {
        font-size: 18px;
    }
`;

const LinksContainer = styled.div`
    @media screen and (min-width: 412px) {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 411px) {
        display: block;
        width: 60%;
        margin: 0 auto;
    }
`;

const LinkButton = styled(Link)`
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

const LandingPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    return (
        <Wrapper>
            <CSSTransition
                in={isMounted}
                timeout={1000}
                classNames='landing'
                unmountOnExit
            >
                <div>
                    <Heading>CRAIG SCHWARTZ</Heading>
                    <Subheading>Hi, I'm Craig. I build user-friendly websites and web applications.</Subheading>
                    <LinksContainer>
                        <LinkButton to='/about'>LEARN MORE</LinkButton>
                        <LinkButton to='/contact'>CONTACT ME</LinkButton>
                    </LinksContainer>
                </div>
            </CSSTransition>
        </Wrapper>
    );
};

export default memo(LandingPage);