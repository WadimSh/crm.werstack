const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
      user: 'wadim11@yandex.ru',
      pass: 'Sh29071978',
    },
  });

  const mailOptions = {
    from: 'wadim11@yandex.ru',
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