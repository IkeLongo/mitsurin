// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactSchema } from "@/lib/contact-schema";

const MAX_BODY = 1024 * 16; // 16KB safety cap

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

    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, message, interestedCuts, company } = parsed.data;

    // Honeypot: if filled, silently accept but do nothing (or return 200 to avoid probing)
    if (company && company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

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

    const to = process.env.CONTACT_TO!;
    const fromHeader = `Mitsurin Website Contact Form <${process.env.SMTP_USER}>`;

    const subject = `🥩 New Website Contact: ${firstName} ${lastName}`;
    const text = [
      `New contact form submission`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      ...(interestedCuts && interestedCuts.length > 0 ? [`Interested Cuts: ${interestedCuts.join(", ")}`] : []),
      ``,
      `Message:`,
      message,
    ].join("\n");

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
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
                      font-size: 20px;
                      font-family: Arial, sans-serif;">
              New Contact Form Submission
            </p>
          </div>

          <!-- Content -->
          <div style="padding:32px 24px;">
            <!-- Contact Info -->
            <div style="margin-bottom:28px;">
              <h2 style="color:#7f1d1d; margin:0 0 14px 0; font-size:22px; border-bottom:2px solid #ca8a04; padding-bottom:8px; font-weight:600;">
                Contact Information
              </h2>
              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111; width:90px; font-size:16px;">Name:</td>
                  <td style="padding:8px 0; color:#222; font-size:16px;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111; font-size:16px;">Email:</td>
                  <td style="padding:8px 0; font-size:16px;">
                    <a href="mailto:${email}" style="color:#ca8a04; text-decoration:none; font-size:16px;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111; font-size:16px;">Phone:</td>
                  <td style="padding:8px 0; font-size:16px;">
                    <a href="tel:${phone}" style="color:#ca8a04; text-decoration:none; font-size:16px;">${phone || "N/A"}</a>
                  </td>
                </tr>
                ${interestedCuts && interestedCuts.length > 0 ? `
                <tr>
                  <td style="padding:8px 0; font-weight:600; color:#111; font-size:16px;">Interested Cuts:</td>
                  <td style="padding:8px 0; color:#222; font-size:16px;">${interestedCuts.join(", ")}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <!-- Message -->
            <div style="margin-bottom:28px;">
              <h2 style="color:#7f1d1d; margin:0 0 14px 0; font-size:22px; border-bottom:2px solid #ca8a04; padding-bottom:8px; font-weight:600;">
                Message
              </h2>
              <div style="background-color:#f9f6f2; padding:18px; border-radius:6px; border-left:4px solid #ca8a04; line-height:1.7; color:#222; font-size:16px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color:#f8f8f8; padding:18px; text-align:center; border-top:1px solid #eee;">
            <p style="margin:0; color:#b91c1c; font-size:14px;">
              This email was sent from your Mitsurin Wagyu website contact form.
            </p>
            <p style="margin:5px 0 0 0; color:#666; font-size:14px;">
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
      replyTo: email, // so you can reply directly to the sender
      headers: {
        'X-Mailer': 'Mitsurin Website Contact Form',
        'X-Priority': '3',
        'X-Source': 'Website Contact Form'
      }
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact POST error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

// Simple HTML escape for the message block
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
