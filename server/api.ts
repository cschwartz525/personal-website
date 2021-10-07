import axios from 'axios';
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import MandrillTransport from 'mandrill-nodemailer-transport';
import config from './config';
import aboutData from './db/about.json';
import resumeData from './db/resume.json';

export const about = (req: Request, res: Response): void => {
    res.json(aboutData);
}

export const resume = (req: Request, res: Response): void => {
    res.json(resumeData);
}

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
    var recaptchaResponse = req.body.recaptcha;
    var recaptchaSecret = process.env.RECAPTCHA_SECRET;
    var recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaResponse)}`;

	const response = await axios(recaptchaVerifyUrl);

    if (response.data && response.data.success) {
        const transport = nodemailer.createTransport(new MandrillTransport({
            apiKey: process.env.MANDRILL_API_KEY
        }));

        var mailOptions = {
            from: config.email_address,
            to: config.email_address,
            subject: 'New email sent from craigschwartzweb.com',
            text: `Subject: ${req.body.subject}\nFrom: ${req.body.sender}\nMessage: ${req.body.message}`
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error', error);
                res.status(400);
                res.send('error');
            }
            console.log('Message sent: ' + info);
            res.status(200);
            res.send('success');
        });

    } else {

        console.log('Recaptcha not verified');
        res.status(500);

    }
}

export default {
  about: about,
  resume: resume,
  sendEmail: sendEmail
}
