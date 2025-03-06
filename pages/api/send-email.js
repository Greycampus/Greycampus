import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { firstName, lastName, email, phone, country, company, department, message } = req.body;

  // Configure SMTP Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail 
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  // Create a professional HTML email template
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
          .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 20px 0;
              text-decoration: none;
              color: white;
              background: #34aeb5;
              border-radius: 5px;
              font-size: 16px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>📩 New Contact Form Submission</h2>
          <p><strong>You have received a new message:</strong></p>
          <div class="info">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Department:</strong> ${department}</p>
          </div>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #34aeb5;">${message}</p>
          
          <p class="footer">
              This email was sent from the Greycampus website contact form.<br>
              <strong>📩 Reply to:</strong> <a href="mailto:${email}">${email}</a>
          </p>
      </div>
  </body>
  </html>
  `;

  // Email Content
  const mailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`, // Your email as sender (Gmail requires this)
    to: process.env.EMAIL_USER, // Your email as recipient
    subject: `📬 Contact Form Submission from ${firstName}`,
    replyTo: email, // Ensures replies go to the user
    html: emailTemplate, // HTML email content
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error sending email", error: error.message });
  }
}
