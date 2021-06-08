import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutPage from './components/about/aboutPage';
import ContactPage from './components/contact/contactPage';
import FrontPage from './components/frontpage';
import ResumePage from './components/resume/resumePage';

const Site = () => (
    <div className='site'>
        <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact>
                    <FrontPage />
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
    </div>
);

ReactDOM.render(<Site />, document.getElementById('main'));
