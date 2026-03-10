import { getMonthlyMetrics, getEventCount, getTopEvents } from "@/lib/ga";

export async function GET() {
  const propertyId = process.env.GA_PROPERTY_ID!;

  const metrics = await getMonthlyMetrics(propertyId);
  const ctaClicks = await getEventCount(propertyId, "cta_click");
  const formSubmits = await getEventCount(propertyId, "contact_form_submit");
  const topEvents = await getTopEvents(propertyId);

  return Response.json({ metrics, ctaClicks, formSubmits, topEvents });
}