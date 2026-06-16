'use server';

import { Resend } from 'resend';

// Initialize Resend with the environment API key.
// Note: If no API key is set, we will gracefully log a console warning and return a dummy success to prevent runtime crashes.
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

interface ApplicationData {
  name: string;
  email: string;
  role: string;
  portfolio?: string;
  experience: string;
  coverLetter?: string;
}

interface InquiryData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: number;
  details: string;
}

export async function submitApplication(data: ApplicationData) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: RESEND_API_KEY environment variable is not set. Submission logged locally:", data);
      return { success: true, warning: "API key missing" };
    }

    const emailResponse = await resend.emails.send({
      from: 'KAVASI Careers <onboarding@resend.dev>',
      to: 'hello@kavasi.com',
      subject: `💼 New Job Application: ${data.role} - ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #000; color: #fff;">
          <h2 style="border-bottom: 2px solid #a855f7; padding-bottom: 10px; color: #a855f7;">New Job Application</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #c084fc;">${data.email}</a></p>
          <p><strong>Applied Role:</strong> ${data.role}</p>
          <p><strong>Portfolio / GitHub URL:</strong> ${data.portfolio ? `<a href="${data.portfolio}" style="color: #c084fc;" target="_blank">${data.portfolio}</a>` : 'N/A'}</p>
          
          <h3 style="color: #c084fc; margin-top: 20px;">Experience & Skills Summary</h3>
          <p style="white-space: pre-wrap; background-color: #111; padding: 15px; border-radius: 8px; border: 1px solid #222; line-height: 1.5;">${data.experience}</p>
          
          ${data.coverLetter ? `
            <h3 style="color: #c084fc; margin-top: 20px;">Cover Letter</h3>
            <p style="white-space: pre-wrap; background-color: #111; padding: 15px; border-radius: 8px; border: 1px solid #222; line-height: 1.5;">${data.coverLetter}</p>
          ` : ''}
          
          <div style="margin-top: 30px; border-top: 1px solid #222; padding-top: 15px; font-size: 12px; color: #666; text-align: center;">
            Sent automatically by KAVASI Application Portal.
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return { success: false, error: emailResponse.error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server Action submitApplication error:", err);
    return { success: false, error: err.message || "Unknown error occurred" };
  }
}

export async function submitInquiry(data: InquiryData) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: RESEND_API_KEY environment variable is not set. Inquiry logged locally:", data);
      return { success: true, warning: "API key missing" };
    }

    const emailResponse = await resend.emails.send({
      from: 'KAVASI Inquiries <onboarding@resend.dev>',
      to: 'hello@kavasi.com',
      subject: `🚨 New Project Request: ${data.service} - ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #000; color: #fff;">
          <h2 style="border-bottom: 2px solid #a855f7; padding-bottom: 10px; color: #a855f7;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #c084fc;">${data.email}</a></p>
          <p><strong>Company/Organization:</strong> ${data.company || 'N/A'}</p>
          <p><strong>Service Required:</strong> ${data.service}</p>
          <p><strong>Estimated Budget:</strong> <span style="color: #22c55e; font-weight: bold;">₹${data.budget.toLocaleString('en-IN')}</span></p>
          
          <h3 style="color: #c084fc; margin-top: 20px;">Project Details</h3>
          <p style="white-space: pre-wrap; background-color: #111; padding: 15px; border-radius: 8px; border: 1px solid #222; line-height: 1.5;">${data.details}</p>
          
          <div style="margin-top: 30px; border-top: 1px solid #222; padding-top: 15px; font-size: 12px; color: #666; text-align: center;">
            Sent automatically by KAVASI Contact Portal.
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      return { success: false, error: emailResponse.error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server Action submitInquiry error:", err);
    return { success: false, error: err.message || "Unknown error occurred" };
  }
}
