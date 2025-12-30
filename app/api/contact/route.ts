import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured. SMTP_USER:', process.env.SMTP_USER ? 'SET' : 'NOT SET', 'SMTP_PASS:', process.env.SMTP_PASS ? 'SET' : 'NOT SET');
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 500 }
      );
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const isSecure = smtpPort === 465;

    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure,
      user: process.env.SMTP_USER,
    });

    // Create transporter with GoDaddy SMTP settings
    // Using more permissive TLS options for cloud hosting compatibility
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
      port: smtpPort,
      secure: isSecure, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Do not fail on invalid certificates (helps with some hosting providers)
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2',
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Unable to connect to email server. Please try again later.' },
        { status: 500 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Email to SAJS Foundation (receiver)
    const adminMailOptions = {
      from: `"SAJS Foundation Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Inquiry</h1>
          </div>
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #1e293b; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
              Submitted on: ${timestamp}
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message: ${message}

Submitted on: ${timestamp}
      `,
    };

    // Confirmation email to the user (sender)
    const userMailOptions = {
      from: `"SAJS Foundation" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting SAJS Foundation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">We've received your message</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${name}</strong>,</p>
            <p style="color: #475569; line-height: 1.6;">
              Thank you for reaching out to SAJS Foundation! We have received your message and will get back to you within 24-48 hours.
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Your message:</p>
              <p style="color: #1e293b; margin: 0; line-height: 1.6;">"${message}"</p>
            </div>
            <p style="color: #475569; line-height: 1.6;">With warm regards,</p>
            <p style="color: #1e293b; font-weight: 600; margin: 0;">SAJS Foundation Team</p>
          </div>
          <div style="background: #1e293b; padding: 25px; border-radius: 0 0 10px 10px; text-align: center;">
            <p style="color: #94a3b8; margin: 0 0 5px 0; font-size: 13px;">📍 Plot No 155, Prithvi Raj Nagar Jhalamand, Jodhpur - 342006</p>
            <p style="color: #94a3b8; margin: 0; font-size: 13px;">
              📧 <a href="mailto:info@sajs.in" style="color: #60a5fa; text-decoration: none;">info@sajs.in</a>
              &nbsp;|&nbsp;
              🌐 <a href="https://sajs.in" style="color: #60a5fa; text-decoration: none;">sajs.in</a>
            </p>
          </div>
        </div>
      `,
      text: `
Dear ${name},

Thank you for reaching out to SAJS Foundation! We have received your message and will get back to you within 24-48 hours.

Your message:
"${message}"

With warm regards,
SAJS Foundation Team

📍 Plot No 155, Prithvi Raj Nagar Jhalamand, Jodhpur - 342006
📧 info@sajs.in
🌐 https://sajs.in
      `,
    };

    // Send both emails
    console.log('Sending emails...');
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    console.log('Emails sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    // Return more specific error message for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
