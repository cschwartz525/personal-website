import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Wrapper = styled.div`
    margin: 25vh auto;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.color};
    font-size: 72px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

const Subheading = styled.h2`
    color: ${({ theme }) => theme.color};
    font-size: 19px;
    margin-bottom: 20px;
    text-align: center;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const LinkButton = styled(Link)`
    background-color: ${colors.white};
    border: ${({ theme }) => `2px solid ${theme.color}`};
    border-radius: 20px;
    color: ${({ theme }) => theme.color};
    display: block;
    font-weight: bold;
    letter-spacing: .5px;
    margin: 0 10px;
    padding: 10px 40px;
    text-decoration: none;
    transition: .2s;

    &:hover {
        background-color: ${({ theme }) => theme.color};
        border: ${({ theme }) => `2px solid ${theme.color}`};
        color: ${({ theme }) => theme.backgroundColor};
        cursor: pointer;
        margin: 0;
        padding: 10px 50px;
        transition: .2s;
    }
`;

const LandingPage = () => (
    <Wrapper>
        <Heading>Craig Schwartz</Heading>
        <Subheading>Hi, I'm Craig. I build user-friendly websites and web applications.</Subheading>
        <LinksContainer>
            <LinkButton to='/about'>Learn More</LinkButton>
            <LinkButton to='/contact'>Contact Me</LinkButton>
        </LinksContainer>
    </Wrapper>
);

export default memo(LandingPage);