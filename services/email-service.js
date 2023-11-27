const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: 'imap.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'info@werstack-dev.ru',
      pass: 'Sh29071978',
    },
  });

  const mailOptions = {
    from: 'info@werstack-dev.ru',
    to,
    subject,
    text: message
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error ('Faild to send email');
  }
}