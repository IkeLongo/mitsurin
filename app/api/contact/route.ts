// app/api/contact/route.ts
import { NextResponse } from "next/server";
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

    const { firstName, lastName, email, phone, message, interestedCuts, customerType, company } = parsed.data;

    // Honeypot: if filled, silently accept but do nothing (or return 200 to avoid probing)
    if (company && company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Trigger GoHighLevel workflow through webhook
    const customerTypeTagMap: Record<string, string> = {
      "Personal (Home Cooking)": "B2C",
      "Business (Restaurant / Retail)": "B2B",
      "Not Sure": "Unqualified",
    };
    const customerTypeTag = customerTypeTagMap[customerType] ?? "Unqualified";

    let ghlWebhookSuccess = false;
    let ghlWebhookError: string | null = null;

    try {
      const webhookPayload = {
        firstName,
        lastName,
        email,
        phone: phone || "",
        message: message || "",
        customerType,
        interestedCuts: interestedCuts ?? [],
        source: "Website Contact Form - Inquiry",
        status: "new",
        tags: ["website-contact-form-inquiry", customerTypeTag],
      };

      const webhookRes = await fetch(process.env.GHL_WEBHOOK_URL_CONTACT_FORM!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
        cache: "no-store",
      });

      if (!webhookRes.ok) {
        const responseText = await webhookRes.text();
        throw new Error(`Webhook failed: ${webhookRes.status} ${responseText}`);
      }

      ghlWebhookSuccess = true;
    } catch (err: unknown) {
      console.error("GHL Webhook Error:", err);
      ghlWebhookError = err instanceof Error ? err.message : "Unknown webhook error";
    }

    return NextResponse.json({ ok: true, ghlWebhookSuccess, ghlWebhookError });
  } catch (err) {
    console.error("contact POST error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


