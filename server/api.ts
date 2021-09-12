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
    var transporter = nodemailer.createTransport(config.smtpConfig);

    var mailOptions = {
        from: req.body.sender,
        to: config.email_address,
        subject: 'New email sent from personal website form',
        text: `Subject: ${req.body.subject}\nFrom: ${req.body.sender}\nMessage: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.write('<h1>Error sending email</h1><a href="/">Back</a>');
        }
        console.log('Message sent: ' + info);
        res.write('<h1>Email sent successfully</h1><a href="/">Back</a>');
    });
}

export default {
  about: about,
  resume: resume,
  sendEmail: sendEmail
}
