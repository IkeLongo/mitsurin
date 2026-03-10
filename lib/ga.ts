import { BetaAnalyticsDataClient } from "@google-analytics/data";

const client = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

export async function getMonthlyMetrics(propertyId: string) {
  const [response] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "30daysAgo",
        endDate: "yesterday",
      },
    ],
    metrics: [
      { name: "activeUsers" },
      { name: "sessions" },
      { name: "conversions" },
    ],
  });

  const row = response.rows?.[0];

  return {
    activeUsers: row?.metricValues?.[0]?.value ?? "0",
    sessions: row?.metricValues?.[1]?.value ?? "0",
    conversions: row?.metricValues?.[2]?.value ?? "0",
  };
}

export async function getEventCount(
  propertyId: string,
  eventName: string
) {
  const [response] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "30daysAgo",
        endDate: "today",
      },
    ],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        stringFilter: {
          matchType: "EXACT",
          value: eventName,
        },
      },
    },
  });

  return response.rows?.[0]?.metricValues?.[0]?.value ?? "0";
}

function getPreviousMonthRange() {
  const now = new Date();

  const firstDayLastMonth = new Date(
    now.getFullYear(),
    now.getMonth() - 1,
    1
  );

  const lastDayLastMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    0
  );

  const format = (d: Date) => d.toISOString().split("T")[0];

  return {
    startDate: format(firstDayLastMonth),
    endDate: format(lastDayLastMonth),
  };
}

export async function getTopEvents(propertyId: string) {
  const [response] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 25,
  });

  return (
    response.rows?.map((r) => ({
      eventName: r.dimensionValues?.[0]?.value ?? "",
      eventCount: r.metricValues?.[0]?.value ?? "0",
    })) ?? []
  );
}