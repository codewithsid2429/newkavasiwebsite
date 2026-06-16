const { Resend } = require('resend');

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("Error: RESEND_API_KEY environment variable is not defined.");
  console.error("Please run this script loading your local env file (supported in Node 20.6.0+):");
  console.error("  node --env-file=.env.local test-email.js");
  process.exit(1);
}

const resend = new Resend(apiKey);

async function sendTestEmail() {
  console.log("Sending test email...");
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'codewithsid2429@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    if (error) {
      console.error("Failed to send email:", error);
    } else {
      console.log("Email sent successfully! Details:", data);
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

sendTestEmail();
