import React, { FormEvent, memo, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import axios from 'axios';

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
    background-color: transparent;
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

const EmailForm = (): JSX.Element => {
    let captcha: ReCAPTCHA;
    const [message, setMessage] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState('');
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');

    const resetForm = () => {
        captcha.reset();
        setMessage('');
        setSender('');
        setSubject('');
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('/api/sendEmail', {
                message,
                recaptcha: recaptchaValue,
                sender,
                subject
            });

            resetForm();
        } catch (error) {
            console.error('Error sending email', error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <InputField
                id='contact-form-email'
                name='sender'
                onChange={(e) => setSender(e.target.value)}
                placeholder='Your email'
                size={50}
                type='text'
                value={sender}
            />
            <InputField
                name='subject'
                onChange={(e) => setSubject(e.target.value)}
                placeholder='Subject'
                size={50}
                type='text'
                value={subject}
            />
            <TextArea
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                rows={20}
                value={message}
            />
            <ReCAPTCHA
                ref={el => { captcha = el; }}
                onChange={setRecaptchaValue}
                sitekey='6Ldi4oYUAAAAALqD9pjgAFq8553Vzz3kTOJW1h0e'
            />
            <ButtonWrapper>
                <FormButton
                    type='submit'
                    value='Send'
                />
                <FormButton
                    onClick={resetForm}
                    type='reset'
                    value='Reset'
                />
            </ButtonWrapper>
        </form>
    );
}

export default memo(EmailForm);
