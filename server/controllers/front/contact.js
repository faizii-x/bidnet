const sendEmail = require("../../helpers/sendMail");

// Contact Us Submission Controller
const contact = async (req, res) => {
  try {
    const { name, email, phoneNo, message } = req.body;
    if (!name)
      return res.json({
        success: false,
        message: "Name is required",
      });
    if (!email)
      return res.json({
        success: false,
        message: "Valid email is required",
      });
    if (!phoneNo)
      return res.json({
        success: false,
        message: "Phone no. is required",
      });
    if (!message)
      return res.json({
        success: false,
        message: "Email is required",
      });

    // Send notification email to admin
    await sendEmail(
      process.env.ADMINMAIL,
      "New Contact Entry from BidNet Estimating",
      "adminContact",
      {
        name,
        email,
        phoneNo,
        message,
      }
      // ['faizansultan113@gmail.com']
      // ['csr.pearsonspecterlitt@gmail.com', 'pearsonspecterlitt.manager@gmail.com', 'Operations@mfbzone.com', 'muhammad@mfbzone.com']
    );

    return res.json({
      success: true,
      message:
        "We have received your request! For more information please check your email",
    });
  } catch (err) {
    console.log("Booking Table Error: ", err);
    return res.json({
      success: false,
      message: "Unexpected Server Error",
    });
  }
};

module.exports = { contact };
