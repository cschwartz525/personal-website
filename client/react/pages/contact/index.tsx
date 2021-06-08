import React, { memo } from 'react';
import EmailForm from './emailForm';

const ContactPage = (): JSX.Element => (
    <div id='main-content'>
        <h1 className='page-title'>Contact</h1>
        <h2 className='page-subtitle'>Contact Me</h2>
        <div className='page-content'>
            <EmailForm />
        </div>
        <h2 className='page-subtitle'>Additional Contact Info</h2>
        <div className='page-content'>
            <div id='contact-list'>
                <div className='contact-item'>
                    <a className='text-link' href='mailto:craigschwartz525@gmail.com'><i className='fa fa-envelope' /> craigschwartz525@gmail.com</a>
                </div>
                <div className='contact-item'>
                    <a className='text-link' href='tel:914-373-1348'><i className='fa fa-phone' /> 914-373-1348</a>
                </div>
                <div className='contact-item'>
                    <a className='text-link' href='https://www.linkedin.com/in/cschwartz525'><i className='fa fa-linkedin' /> cschwartz525</a>
                </div>
            </div>
        </div>
    </div>
  );

export default memo(ContactPage);
