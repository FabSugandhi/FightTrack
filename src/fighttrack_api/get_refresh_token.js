const { google } = require('googleapis');
const readline = require('readline');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID, 
    process.env.CLIENT_SECRET, 
    "https://fighttrack-abws.onrender.com/auth/oauth2callback" 
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getAccessToken = () => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    rl.question('Enter the code from that page here: ', (code) => {
        oauth2Client.getToken(code, (err, token) => {
            if (err) {
                console.error('Error retrieving access token', err);
                return;
            }
            console.log('Your refresh token is:', token.refresh_token);
            rl.close();
        });
    });
};

getAccessToken();