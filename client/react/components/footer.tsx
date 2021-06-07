import React, { memo, useEffect, useState } from 'react';

const Footer = (): JSX.Element => {
    const [facebookIcon, setFacebookIcon] = useState('');
    const [instagramIcon, setInstagramIcon] = useState('');
    const [googleIcon, setGoogleIcon] = useState('');
    const [githubIcon, setGithubIcon] = useState('');
    const [linkedinIcon, setLinkedinIcon] = useState('');
    const [soundcloudIcon, setSoundcloudIcon] = useState('');

    useEffect(() => {
        fetch('/api/social')
        .then(res => res.json())
        .then(data => {
            setFacebookIcon(data.facebook);
            setInstagramIcon(data.instagram);
            setGoogleIcon(data.google);
            setGithubIcon(data.github);
            setLinkedinIcon(data.linkedin);
            setSoundcloudIcon(data.soundcloud);
        })
        .catch(error => {
            console.error('Error fetching social icon data', error);
        })
    }, []);

    return (
        <div id='footer'>
            <div id='copyright'>
                © 2021 Craig Schwartz
            </div>
            <div className='social-icons'>
                <div className='icon icon--soundcloud'>
                    <a href='https://soundcloud.com/soundcastlemusic'>
                        <svg viewBox='0 0 512 512'>
                            <path d={soundcloudIcon}/>
                        </svg>
                    </a>
                </div>
                <div className='icon icon--instagram'>
                    <a href='https://www.instagram.com/cschwartz525/'>
                        <svg viewBox='0 0 512 512'>
                            <path d={instagramIcon}/>
                        </svg>
                    </a>
                </div>
                <div className='icon icon--facebook'>
                    <a href='https://www.facebook.com/cschwartz525'>
                        <svg viewBox='0 0 512 512'>
                            <path d={facebookIcon}/>
                        </svg>
                    </a>
                </div>
                <div className='icon icon--google'>
                    <a href='https://plus.google.com/u/0/101927703181492899764/posts'>
                        <svg viewBox='0 0 512 512'>
                            <path d={googleIcon}/>
                        </svg>
                    </a>
                </div>
                <div className='icon icon--github'>
                    <a href='https://github.com/cschwartz525'>
                        <svg viewBox='0 0 512 512'>
                            <path d={githubIcon}/>
                        </svg>
                    </a>
                </div>
                <div className='icon icon--linkedin'>
                    <a href='https://www.linkedin.com/in/cschwartz525'>
                        <svg viewBox='0 0 512 512'>
                            <path d={linkedinIcon}/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default memo(Footer);
