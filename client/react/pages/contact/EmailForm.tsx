import React, { memo } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin: 10px auto;

    @media screen and (min-width: 412px) {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 411px) {
        display: block;
        width: 50%;
        margin: 0 auto;
    }
`;

const FormButton = styled.input`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => `2px solid ${theme.color}`};
    border-radius: 20px;
    color: ${({ theme }) => theme.color};
    display: block;
    font-weight: bold;
    letter-spacing: .5px;
    text-align: center;
    text-decoration: none;
    transition: .2s;

    @media screen and (min-width: 412px) {
        margin: 0 10px;
        padding: 10px 40px;
    }

    @media screen and (max-width: 411px) {
        margin: 10px 0;
        padding: 10px 20px;
        width: 100%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color};
        border: ${({ theme }) => `2px solid ${theme.color}`};
        color: ${({ theme }) => theme.backgroundColor};
        cursor: pointer;
        transition: .2s;

        @media screen and (min-width: 412px) {
            margin: 0;
            padding: 10px 50px;
        }

        @media screen and (max-width: 411px) {
            padding: 10px 30px;
        }
    }
`;

const InputField = styled.input`
    background: transparent;
    border: none;
    border-bottom: ${({ theme }) => `2px solid ${theme.color}`};
    color: ${({ theme }) => theme.color};
    font-size: 20px;
    margin: 0 0 8px;
    outline: none;
    padding: 5px 0;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.color};
        opacity: 0.5;
    }

    &:active,
    &:focus {
        box-shadow: ${({ theme }) => `0 2px 0 ${theme.color}`};
    }
`;

const TextArea = styled.textarea`
    background: transparent;
    border: ${({ theme }) => `2px solid ${theme.color}`};
    color: ${({ theme }) => theme.color};
    font-family: inherit;
    font-size: 16px;
    margin: 8px 0;
    outline: none;
    padding: 5px;
    width: calc(100% - 14px);

    &::placeholder {
        color: ${({ theme }) => theme.color};
        opacity: 0.5;
    }
`;

const EmailForm = (): JSX.Element => (
    <form
        action='/api/sendEmail'
        encType='application/json'
        method='post'
    >
        <InputField
            id='contact-form-email'
            name='sender'
            placeholder='Your email'
            size={50}
            type='text'
        />
        <InputField
            name='subject'
            placeholder='Subject'
            size={50}
            type='text'
        />
        <TextArea
            name='message'
            rows={20}
        />
        <div className='g-recaptcha' data-sitekey='6Ldi4oYUAAAAALqD9pjgAFq8553Vzz3kTOJW1h0e'></div>
        <ButtonWrapper>
            <FormButton
                type='submit'
                value='Send'
            />
            <FormButton
                type='reset'
                value='Reset'
            />
        </ButtonWrapper>
    </form>
);

export default memo(EmailForm);
