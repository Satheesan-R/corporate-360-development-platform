const nodemailer = require("nodemailer");

// Create Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can configure SMTP host/port in .env as well
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Send account activation email to newly created employee
 */
const sendActivationEmail = async (email, activationToken) => {
  const activationUrl = `${process.env.CLIENT_URL}/activate-account?token=${activationToken}`;

  const mailOptions = {
    from: `"Corporate 360 HR" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Activate Your Corporate 360 Account",
    html: `
      <h2>Welcome to Corporate 360!</h2>
      <p>An account has been created for you by HR. Please activate your account and set up your password by clicking the link below:</p>
      <a href="${activationUrl}" style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; display: inline-block;">Activate Account</a>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't request this, please contact your HR administrator.</p>
    `
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = {
  sendActivationEmail
};