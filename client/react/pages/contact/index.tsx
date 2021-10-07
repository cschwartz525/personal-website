import React, { memo } from 'react';
import styled from 'styled-components';
import AdditionalInfo from './AdditionalInfo';
import EmailForm from './EmailForm';

const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 600px;
    padding: 0 20px 100px;
`;

const ContactPage = (): JSX.Element => (
    <Wrapper>
        <h1>Contact</h1>
        <EmailForm />
        <AdditionalInfo />
    </Wrapper>
  );

export default memo(ContactPage);
