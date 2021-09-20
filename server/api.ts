import axios from 'axios';
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import config from './config';
import aboutData from './db/about.json';
import resumeData from './db/resume.json';

export const about = (req: Request, res: Response): void => {
    res.json(aboutData);
}

export const resume = (req: Request, res: Response): void => {
    res.json(resumeData);
}

export const sendEmail = (req: Request, res: Response): void => {
    var recaptchaResponse = req.body['g-recaptcha-response'];
    var recaptchaSecret = process.env.RECAPTCHA_SECRET;
    var recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaResponse)}`;

	axios(recaptchaVerifyUrl).then((response) => {

            if (response.data && response.data.success) {
                var transporter = nodemailer.createTransport(config.smtpConfig);

                var mailOptions = {
                    from: req.body.sender,
                    to: config.email_address,
                    subject: 'New email sent from personal website form',
                    text: `Subject: ${req.body.subject}\nFrom: ${req.body.sender}\nMessage: ${req.body.message}`
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        res.write('<h1>Error sending email</h1><a href="/">Back</a>');
                    }
                    console.log('Message sent: ' + info);
                    res.write('<h1>Email sent successfully</h1><a href="/">Back</a>');
                });

            } else {

                console.log('Recaptcha not verified');
                res.status(500);

            }

    });
}

export default {
  about: about,
  resume: resume,
  sendEmail: sendEmail
}
