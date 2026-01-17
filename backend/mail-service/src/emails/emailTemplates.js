export const getOtpEmailTemplate = (otp) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 40px 30px;
          text-align: center;
        }
        .otp-code {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 36px;
          font-weight: bold;
          letter-spacing: 8px;
          padding: 20px 40px;
          border-radius: 8px;
          margin: 30px 0;
          display: inline-block;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }
        .message {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .warning {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          color: #856404;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
          font-size: 14px;
        }
        .footer {
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          color: #666;
          font-size: 14px;
        }
        .footer p {
          margin: 5px 0;
        }
        .brand {
          color: #667eea;
          font-weight: bold;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Chatify</h1>
        </div>
        <div class="content">
          <h2>Verify Your Email</h2>
          <p class="message">
            Welcome to Chatify! To complete your login, please use the OTP below:
          </p>
          <div class="otp-code">${otp}</div>
          <div class="warning">
            <strong>Security Notice:</strong> This code will expire in 5 minutes. Do not share this code with anyone.
          </div>
          <p class="message">
            If you didn't request this code, please ignore this email.
          </p>
        </div>
        <div class="footer">
          <p><span class="brand">Chatify</span> - Connect with friends instantly</p>
          <p>This is an automated message, please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getWelcomeEmailTemplate = (name) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 40px 30px;
          text-align: center;
        }
        .welcome-message {
          color: #333;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .features {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          margin: 30px 0;
          text-align: left;
        }
        .features h3 {
          color: #667eea;
          margin-top: 0;
          margin-bottom: 20px;
        }
        .features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .features li {
          padding: 8px 0;
          color: #666;
          position: relative;
          padding-left: 25px;
        }
        .features li:before {
          content: "✓";
          color: #28a745;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 6px;
          display: inline-block;
          margin: 20px 0;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        .footer {
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          color: #666;
          font-size: 14px;
        }
        .footer p {
          margin: 5px 0;
        }
        .brand {
          color: #667eea;
          font-weight: bold;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Welcome to Chatify ${name}!</h1>
        </div>
        <div class="content">
          <p class="welcome-message">
            Hi there! Welcome to <strong>Chatify</strong> - your new favorite way to connect with friends and family.
          </p>

          <div class="features">
            <h3>✨ What you can do:</h3>
            <ul>
              <li>Send instant messages to your contacts</li>
              <li>Create group chats for better collaboration</li>
              <li>Share photos, videos, and files</li>
              <li>Enjoy real-time messaging with Socket.io</li>
              <li>Secure authentication with OTP verification</li>
            </ul>
          </div>

          <a href="#" class="cta-button">Start Chatting Now</a>

          <p class="welcome-message">
            Get started by logging into your account and exploring all the amazing features we have prepared for you!
          </p>
        </div>
        <div class="footer">
          <p><span class="brand">Chatify</span> - Connect with friends instantly</p>
          <p>This is an automated message, please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
