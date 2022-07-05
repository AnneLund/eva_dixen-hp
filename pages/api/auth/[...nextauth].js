const nodemailer = require("nodemailer");

nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user:  process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

