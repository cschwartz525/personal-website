import React, { memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faEnvelope, faLinkedinIn, faPhone);

const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`;

const ContactLink = styled.a`
    color: ${({ theme }) => theme.color};
    display: block;
    margin: 6px auto;
`;

const ContactPage = (): JSX.Element => (
    <Wrapper>
        <h2>Additional Contact Info</h2>
        <ContactLink href='mailto:craigschwartz525@gmail.com'>
            <FontAwesomeIcon icon='envelope' />&nbsp;craigschwartz525@gmail.com
        </ContactLink>
        <ContactLink href='tel:914-373-1348'>
            <FontAwesomeIcon icon='phone' />&nbsp;914-373-1348
        </ContactLink>
        <ContactLink href='https://www.linkedin.com/in/cschwartz525'>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />&nbsp;cschwartz525
        </ContactLink>
    </Wrapper>
  );

export default memo(ContactPage);
