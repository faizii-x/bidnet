const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter object
const transporter = nodemailer.createTransport({
    service: process.env.EMAILSERVICE,
    host: process.env.EMAILHOST,
    port: Number(process.env.EMAILPORT),
    secure: Boolean(process.env.EMAILSECURE),
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD,
    },
});

// Helper function to load and replace placeholders in HTML
const loadTemplate = (templateName, data) => {
    const templatePath = path.join(__dirname, '..', 'templates', `${templateName}.html`);
    let templateContent = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual data
    Object.keys(data).forEach((key) => {
        templateContent = templateContent.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
    });

    // Handle the conditional for the attachment section
    if (!data.attachmentSection) {
        templateContent = templateContent.replace(/{{#if attachmentSection}}[\s\S]*?{{\/if}}/g, ''); // Remove the entire block if no attachment
    } else {
        templateContent = templateContent.replace(/{{#if attachmentSection}}([\s\S]*?){{\/if}}/, '$1'); // Keep the block if attachment exists
    }

    return templateContent;
};

// Send email function
const sendEmail = async (to, subject, templateName, data, cc = [], attachmentPath = null) => {
    // The email that will be displayed to user
    data.contactEmail = process.env.CONTACTEMAIL;
    data.attachmentSection = attachmentPath ? true : false; // Set to true if there's an attachment

    const htmlContent = loadTemplate(templateName, data);

    const mailOptions = {
        from: process.env.EMAIL,
        to,
        cc,
        subject,
        html: htmlContent,
        attachments: attachmentPath ? [{ path: attachmentPath }] : [], // Attach file if exists
    };

    try {
        await transporter.sendMail(mailOptions);
        if (attachmentPath) fs.unlinkSync(attachmentPath); // Remove the file after sending
    } catch (err) {
        console.error('Error sending email:', err);
    }
};

module.exports = sendEmail;
