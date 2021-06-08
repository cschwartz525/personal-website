import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 120px auto;
`;

const Heading = styled.h1`
    font-size: 72px;
    margin-bottom: 20px;
    text-align: center;
`;

const Subheading = styled.h2`
    font-size: 19px;
    margin-bottom: 20px;
    text-align: center;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const LinkButton = styled(Link)`
    background-color: rgba(0,0,0,0);
    border: 2px solid #000000;
    border-radius: 20px;
    color: #000000;
    display: block;
    font-weight: bold;
    letter-spacing: .5px;
    margin: 0 10px;
    padding: 10px 40px;
    text-decoration: none;
    transition: .2s;

    &:hover {
        background-color: #000000;
        border: 2px solid #000000;
        color: #ffffff;
        cursor: pointer;
        margin: 0;
        padding: 10px 50px;
        transition: .2s;
    }
`;

const FrontPage = () => (
    <Wrapper>
        <Heading>Craig Schwartz</Heading>
        <Subheading>Hi, I'm Craig. I build user-friendly websites and web applications.</Subheading>
        <LinksContainer>
            <LinkButton to='/about'>Learn More</LinkButton>
            <LinkButton to='/contact'>Contact Me</LinkButton>
        </LinksContainer>
    </Wrapper>
);

export default memo(FrontPage);