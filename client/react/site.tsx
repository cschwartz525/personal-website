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
import colors from './styles/colors';
import themes from './themes';

const Wrapper = styled.div`
    background: ${colors.lightgrey};
    font-family: Lato, Helvetica, Arial;
`;

const Site = () => {
    const [theme, setTheme] = useState('light');

    return (
        <Wrapper>
            <Router>
                <ThemeProvider theme={themes[theme]}>
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
                </ThemeProvider>
            </Router>
            <Footer />
        </Wrapper>
    );
};

ReactDOM.render(<Site />, document.getElementById('main'));
