const { google } = require('googleapis');
const { encode } = require('js-base64');

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

        // Set the credentials for the Gmail API client
        oauth2Client.setCredentials({ access_token: accessToken });

        // Create the email content
        const emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const rawEmail = [
            `From: ${email}`,
            `To: ${process.env.COMPANY_EMAIL}`,
            'Subject: Contact Us Form Submission',
            '',
            emailContent
        ].join('\n');

        // Encode the email content in base64
        const encodedEmail = encode(rawEmail).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

        // Create the Gmail API client
        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

        // Send the email using the Gmail API
        await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedEmail
            }
        });

        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send({ message: 'Error sending email', error });
    }
};