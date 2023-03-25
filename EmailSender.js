const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// enable less secure app access
transporter.on('token', token => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
});

// send email
const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'recipientemail@gmail.com',
  subject: 'Test email',
  text: 'This is a test email sent using nodemailer.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});