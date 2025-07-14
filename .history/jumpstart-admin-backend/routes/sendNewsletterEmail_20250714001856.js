const nodemailer = require("nodemailer");

const sendNewsletterEmail = async (subscriberEmail, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "madalaneoscar50@gmail.com", // replace with your real Gmail address
        pass: "kocjzqrgycxwvpsq",     // remove spaces!
      },
    });

    const mailOptions = {
      from: '"Jumpstart your Career NPO" madalaneoscar50@gmail.com',
      to: subscriberEmail,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${subscriberEmail}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to send email to ${subscriberEmail}`, error);
    return false;
  }
};

module.exports = sendNewsletterEmail;
