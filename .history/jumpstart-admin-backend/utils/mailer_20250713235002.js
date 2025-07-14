import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or SMTP config
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmailToSubscribers = async (emails, newsletter) => {
  const subject = "📢 New Newsletter Published!";
  const html = `
    <h2>${newsletter.sections[0].title}</h2>
    <p>${newsletter.sections[0].paragraph.slice(0, 300)}...</p>
    <p><strong>Published on:</strong> ${new Date().toLocaleDateString()}</p>
    ${
      newsletter.pdfPath
        ? `<p><a href="http://yourdomain.com/${newsletter.pdfPath}" target="_blank">📄 View PDF</a></p>`
        : ""
    }
  `;

  for (const email of emails) {
    await transporter.sendMail({
      from: `"Jumpstart NPO" <${process.env.MAIL_USER}>`,
      to: email,
      subject,
      html,
    });
  }
};

export default sendEmailToSubscribers;
