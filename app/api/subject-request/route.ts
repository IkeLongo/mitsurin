// app/api/subject-request/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const MAX_BODY = 1024 * 16; // 16KB safety cap

// Privacy Request Schema
const PrivacyRequestSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Address must be at least 5 characters").max(200, "Address must be less than 200 characters"),
  requestType: z.string().min(1, "Request type is required"),
  description: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

// Request Type Labels
const requestTypeLabels: Record<string, string> = {
  'data-access': 'Request Access to My Data',
  'data-deletion': 'Request Deletion of My Data',
  'data-correction': 'Request Correction of My Data',
  'data-portability': 'Request Data Portability',
  'opt-out': 'Opt-out of Data Sale/Sharing',
  'other': 'Other Privacy Request',
};

export async function POST(req: Request) {
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY) {
      return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }

    let data: unknown;
    try {
      data = JSON.parse(raw);
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const parsed = PrivacyRequestSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, address, requestType, description } = parsed.data;

    // Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.PRIVACY_TO || process.env.CONTACT_TO!;
    const fromHeader = `Mitsurin Privacy Request <${process.env.SMTP_USER}>`;
    const requestLabel = requestTypeLabels[requestType] || requestType;

    const subject = `🔒 Privacy Request: ${requestLabel} - ${firstName} ${lastName}`;
    const text = [
      `New privacy request submission`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Address: ${address}`,
      `Request Type: ${requestLabel}`,
      ``,
      `Description:`,
      description,
    ].join("\n");

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Privacy Request Submission</title>
      </head>
      <body style="margin:0; padding:20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width:600px; margin:0 auto; background-color:#fff; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #7f1d1d 0%, #ca8a04 100%);
                      padding: 32px 24px 24px;
                      text-align: center;">
            <img
              src="https://mitsurinwagyu.com/mitsurin-horizontal-logo-white.png"
              alt="Mitsurin Wagyu Beef"
              width="120"
              height="auto"
              style="display: block;
                    margin: 0 auto 10px auto;
                    max-width: 120px;
                    height: auto;
                    border: 0;
                    outline: none;
                    text-decoration: none;"
            />
            <p style="margin: 8px 0 0;
                      color: #ffffff;
                      opacity: 0.92;
                      font-size: 16px;
                      font-family: Arial, sans-serif;">
              🔒 Privacy Request Submission
            </p>
          </div>

          <!-- Content -->
          <div style="padding:32px 24px;">
            <!-- Request Info -->
            <div style="margin-bottom:28px;">
              <h2 style="color:#7f1d1d; margin:0 0 14px 0; font-size:18px; border-bottom:2px solid #ca8a04; padding-bottom:8px; font-weight:600;">
                Privacy Request Information
              </h2>
              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111; width:120px;">Name:</td>
                  <td style="padding:8px 0; color:#111; font-weight:500;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111;">Email:</td>
                  <td style="padding:8px 0;">
                    <a href="mailto:${email}" style="color:#ca8a04; text-decoration:none; font-weight:500;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111;">Address:</td>
                  <td style="padding:8px 0; color:#111; font-weight:500;">${escapeHtml(address)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111;">Request Type:</td>
                  <td style="padding:8px 0;">
                    <span style="background-color:#7f1d1d; color:#ffffff; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:600;">
                      ${requestLabel}
                    </span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Description -->
            <div style="margin-bottom:28px;">
              <h2 style="color:#7f1d1d; margin:0 0 14px 0; font-size:18px; border-bottom:2px solid #ca8a04; padding-bottom:8px; font-weight:600;">
                Request Description
              </h2>
              <div style="background-color:#f9f6f2; padding:18px; border-radius:6px; border-left:4px solid #ca8a04; line-height:1.7; color:#222;">
                ${escapeHtml(description).replace(/\n/g, '<br>')}
              </div>
            </div>

            <!-- Privacy Notice -->
            <div style="background-color:#fef3c7; border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:20px;">
              <h3 style="color:#92400e; margin:0 0 8px 0; font-size:14px; font-weight:600;">
                ⚠️ Privacy Request Action Required
              </h3>
              <p style="margin:0; color:#92400e; font-size:13px; line-height:1.5;">
                This is a formal privacy request that may require action within legal timeframes. 
                Please review and respond according to applicable privacy laws (GDPR, CCPA, etc.).
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color:#f8f8f8; padding:18px; text-align:center; border-top:1px solid #eee;">
            <p style="margin:0; color:#b91c1c; font-size:12px;">
              This email was sent from your Mitsurin Wagyu privacy request form.
            </p>
            <p style="margin:5px 0 0 0; color:#666; font-size:12px;">
              Received: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: fromHeader,
      to,
      subject,
      text,
      html,
      replyTo: email, // so you can reply directly to the requester
      headers: {
        'X-Mailer': 'Mitsurin Privacy Request Form',
        'X-Priority': '2', // High priority for legal compliance
        'X-Source': 'Privacy Request Form',
        'X-Request-Type': requestType
      }
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("subject-request POST error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

// Simple HTML escape for security
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
