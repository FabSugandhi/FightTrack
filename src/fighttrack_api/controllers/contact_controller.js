const nodemailer = require('nodemailer');

// @route POST /api/contact/contact
// @access Public
// @req.body { name, email, phone, message }
exports.sendContactEmail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail', // email service
        auth: {
            user: process.env.EMAIL_USER, // the transporter email
            pass: process.env.EMAIL_PASS  // the transporter password
        }
    });

    // Setup email data
    let mailOptions = {
        from: email, // sender address
        to: process.env.COMPANY_EMAIL, // list of receiver emails
        subject: 'Contact Us Form Submission', // Subject line
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}` // text body filled with the form data
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