const nodemailer = require('nodemailer');

// @route POST /api/contact/contact
// @access Public
// @req.body { name, email, message }
exports.sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail', // email service
        auth: {
            user: process.env.EMAIL_USER, // our email
            pass: process.env.EMAIL_PASS  // our email password
        }
    });

    // Setup email data
    let mailOptions = {
        from: email, // sender address
        to: process.env.COMPANY_EMAIL, // list of receivers
        subject: 'Contact Us Form Submission', // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // plain text body
    };

    // Send mail with defined transport object
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
};