import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  // ✅ Extract form data
  const { name, email, phone } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: "All fields are required: Name, Email, and Phone" });
  }

  // ✅ Configure SMTP Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail 
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  // ✅ Create HTML Email Template
  const emailTemplate = `
  <html>
  <head>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
          }
          .container {
              max-width: 600px;
              margin: auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
              color: #34aeb5;
              text-align: center;
          }
          p {
              font-size: 16px;
              line-height: 1.5;
              color: #555;
          }
          .info {
              background: #eef9f9;
              padding: 15px;
              border-radius: 5px;
              margin: 10px 0;
          }
          .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #888;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>📩 New Brochure Download Request</h2>
          <p><strong>You have received a new request:</strong></p>
          <div class="info">
              <p><strong>Name:</strong> ${name} </p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <p class="footer">
              This email was sent from the Greycampus website brochure download form.<br>
              <strong>📩 Reply to:</strong> <a href="mailto:${email}">${email}</a>
          </p>
      </div>
  </body>
  </html>
  `;

  // ✅ Email Content
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Your email as sender
    to: process.env.EMAIL_USER, // Your email as recipient
    subject: `📬 Brochure Download Request from ${name}`,
    replyTo: email, // Ensures replies go to the user
    html: emailTemplate, // HTML email content
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Brochure request submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message); // ✅ Improved error logging
    return res.status(500).json({ success: false, message: "Error sending email", error: error.message });
  }
}
