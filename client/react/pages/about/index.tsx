import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Container = styled.div`
    margin: 60px auto;
    max-width: 600px;
    padding: 0 20px;

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

const AboutPage = (): JSX.Element => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    return (
        <CSSTransition
            in={isMounted}
            timeout={500}
            classNames='about'
            unmountOnExit
        >
            <Container>
                <h1>Hey! I'm Craig</h1>
                <p>I'm a software developer from New York City. I have a wide range of full-stack skills, but I tend to focus most of my energy on front-end web applications. I specialize in building user-centric websites and web applications in React, Typescript, and Node.</p>
                <p>After graduating the University of Virginia with a degree in Computer Science, I moved to the Big Apple where I have <StyledLink to='/resume'>worked in a variety of industries</StyledLink>, including financial services, e-commerce, streaming video, and most recently, social media.</p>
                <p>When I'm not building web apps, I love to travel, run, and explore my city. I also play guitar and write my own music.</p>
                <p>Whether you need a basic information site, an e-commerce site, or something special, I can help you build the website of your dreams! Contact me to get started.</p>
            </Container>
        </CSSTransition>
    );
};

export default memo(AboutPage);
