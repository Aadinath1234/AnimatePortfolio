import nodemailer from "nodemailer";

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Or use other services like SendGrid, Mailgun, etc.
  auth: {
    user: "aadeshsatpute51@gmail.com", // Use environment variables for security
    pass: "blhrpoameknbxlbk",
  },
});

const sendEmail = async (username, email, subject, message) => {
  const mailOptions = {
    from: email,
    to: "aadeshsatpute375@gmail.com", // Email where you want to receive contact form submissions
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      You have received a new message from ${username} (${email}):
      
      Subject: ${subject}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default { sendEmail };

