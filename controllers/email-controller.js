const emailService = require('../services/email-service');

exports.sendEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    await emailService.sendEmail(to, subject, message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}