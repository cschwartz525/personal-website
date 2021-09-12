import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin: 40px auto;
    max-width: 600px;

    p {
        margin-bottom: 8px;
    }
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.links.color};

    &:hover {
        color: ${({ theme }) => theme.links.hoverColor};
    }

    &:visited {
        color: ${({ theme }) => theme.links.visitedColor};
    }
`;

const AboutPage = (): JSX.Element => (
    <Container>
        <h1>Hey! I'm Craig</h1>
        <p>I'm a software developer from New York City. I have a wide range of full-stack skills, but I tend to focus most of my energy on front-end web applications. I specialize in building user-centric websites and web applications in React, Typescript, and Node.</p>
        <p>After graduating the University of Virginia with a degree in Computer Science, I moved to the Big Apple where I have <StyledLink to='/resume'>worked in a variety of industries</StyledLink>, including financial services, e-commerce, and most recently, streaming video.</p>
        <p>When I'm not building web apps, I love to travel, run, and explore my city. I also play guitar and write my own music.</p>
        <p>Whether you need a basic information site, an e-commerce site, or something special, I can help you build the website of your dreams! Contact me to get started.</p>
    </Container>
);

export default memo(AboutPage);
