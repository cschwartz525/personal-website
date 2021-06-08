import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import LandingPage from './pages/landing';
import ResumePage from './pages/resume';
import colors from './styles/colors';

const Wrapper = styled.div`
    background: ${colors.lightgrey};
    font-family: Lato, Helvetica, Arial;
`;

const Site = () => (
    <Wrapper>
        <Router>
            <NavBar />
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
);

ReactDOM.render(<Site />, document.getElementById('main'));
