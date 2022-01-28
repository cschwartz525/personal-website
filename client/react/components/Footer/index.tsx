import React, { memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faGithub, faLinkedinIn, faEnvelope);

const Container = styled.div`
    height: 80px;
    margin-top: 20px;
`;

const SocialRow = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialButton = styled.a`
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => `1px solid ${theme.color}`};
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    display: flex;
    font-size: 20px;
    height: 36px;
    justify-content: center;
    margin: 5px;
    width: 36px;

    &:hover {
        background-color: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.backgroundColor};
    }
`;

const Footer = (): JSX.Element => (
    <Container>
        <div className='centered'>
            © 2021 Craig Schwartz
        </div>
        <SocialRow>
            <SocialButton href='https://github.com/cschwartz525' target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </SocialButton>
            <SocialButton href='https://www.linkedin.com/in/cschwartz525/' target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </SocialButton>
            <SocialButton href='mailto:craigschwartz525@gmail.com'>
                <FontAwesomeIcon icon='envelope' />
            </SocialButton>
        </SocialRow>
    </Container>
);

export default memo(Footer);
