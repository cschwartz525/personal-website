import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import LandingPage from './pages/landing';
import ResumePage from './pages/resume';
import themes from './themes';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: Lato, Helvetica, Arial;
    min-height: 100vh;
    position: relative;
`;

const Site = () => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeProvider theme={themes[theme]}>
            <Wrapper>
                <Router>
                    <NavBar
                        setTheme={setTheme}
                        theme={theme}
                    />
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
                        <Route path='/resume'>
                            <ResumePage />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
};

ReactDOM.render(<Site />, document.getElementById('main'));
