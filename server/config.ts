export default {
    port: process.env.PORT || 8000,
    email_address: 'craigschwartz525@gmail.com',
    smtpConfig: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'craigschwartz525@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    }
};
