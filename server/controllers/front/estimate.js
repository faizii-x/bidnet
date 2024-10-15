const sendEmail = require("../../helpers/sendMail");
const uploadFile = require("../../middlewares/uploadFile");

const newEstimate = async (req, res) => {
  uploadFile(req, res, async (err) => {
    if (err) {
      return res.json({ success: false, message: err.message });
    }

    const { name, email, Contact, Requirements, link } = req.body;
    const file = req.file ? req.file.path : null;

    // Validation checks
    if (!name) {
      return res.json({ success: false, message: 'Name is required!' });
    }
    if (!email) {
      return res.json({ success: false, message: 'Email is required!' });
    }
    if (!Contact) {
      return res.json({ success: false, message: 'Phone number is required!' });
    }

    // Prepare email data
    const data = {
      name,
      email,
      Contact,
      Requirements,
      link,
    };

    try {
      // Send email with file attachment
      await sendEmail(
        process.env.ADMINMAIL,
        'New Estimate Request',
        'estimate', // Updated template name
        data,
        [], // No CC
        file // Attachment path
      );

      return res.json({ success: true, message: "We've received your request and will get back to you soon!" });
    } catch (error) {
      return res.json({ success: false, message: 'Unexpected Server Error!' });
    }
  });
};


module.exports = { newEstimate };
