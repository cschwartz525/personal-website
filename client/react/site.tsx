import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import LandingPage from './pages/landing';
import PorfolioPage from './pages/portfolio';
import ResumePage from './pages/resume';
import themes from './themes';

const Background = styled.div`
    background: ${({ theme }) => theme.backgroundGradient};
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: -1;
`;

const Wrapper = styled.div`
    color: ${({ theme }) => theme.color};
    display: flex;
    flex-direction: column;
    font-family: Lato, Helvetica, Arial;
    justify-content: space-between;
    min-height: 100vh;
`;

const getRandomTheme = () => {
    const keys = Object.keys(themes);
    const index = Math.floor(Math.random() * keys.length);
    const theme = themes[keys[index]];

    return theme;
};

const theme = getRandomTheme();

const Site = () => {
    const [showNavList, setShowNavList] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Background />
            <Wrapper>
                <Router>
                    <NavBar
                        setShow={setShowNavList}
                        show={showNavList}
                    />
                    {
                        !showNavList &&
                        <Switch>
                            <Route path='/' exact>
                                <LandingPage />
                            </Route>
                            <Route path='/about'>
                                <AboutPage />
                            </Route>
                            <Route path='/contact'>
                                <ContactPage />
                            </Route>
                            <Route path='/portfolio'>
                                <PorfolioPage />
                            </Route>
                            <Route path='/resume'>
                                <ResumePage />
                            </Route>
                        </Switch>
                    }
                </Router>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
};

ReactDOM.render(<Site />, document.getElementById('main'));
