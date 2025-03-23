import emailService from "../utils/emailService.js";

export const handleContactForm = async (req, res) => {
  const { username, email, subject, message } = req.body;

  // Validate input
  if (!username || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Call the email service to send the email
    await emailService.sendEmail(username, email, subject, message);

    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending message" });
  }
};
