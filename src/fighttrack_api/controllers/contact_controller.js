const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

// @route POST /api/contact/contact
// @access Public
// @req.body { name, email, phone, message }
exports.sendContactEmail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create an OAuth2 client
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID, // Client ID
        process.env.CLIENT_SECRET, // Client Secret
        "https://fighttrack-abws.onrender.com/oauth2callback" // Redirect URL
    );

    // Set the refresh token
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });

    try {
        // Generate an access token
        const accessTokenResponse = await oauth2Client.getAccessToken();
        const accessToken = accessTokenResponse?.token;

        if (!accessToken) {
            return res.status(500).send('Error getting access token');
        }

        // Create a transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken.token
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
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error sending email' });
    }
};