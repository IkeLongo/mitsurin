"use client";

import React, { createContext, useCallback, useContext, useMemo } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

type TrackParams = Record<string, any>;

type AnalyticsContextValue = {
  track: (event: string, params?: TrackParams) => void;
};

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

function safeGtag(event: string, params?: TrackParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event, {
    ...params,
  });
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const track = useCallback((event: string, params?: TrackParams) => {
    // GA4
    safeGtag(event, params);

    // Later: Clarity/PostHog hooks can live here too
    // Example:
    // if (window.clarity) window.clarity("event", event);
    // if (posthog) posthog.capture(event, params);
  }, []);

  const value = useMemo(() => ({ track }), [track]);

  return (
    <AnalyticsContext.Provider value={value}>
      {/* Load GA4 only if configured */}
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                // Optional: reduce noise
                send_page_view: true
              });
            `}
          </Script>
        </>
      ) : null}

      {children}
    </AnalyticsContext.Provider>
  );
}

export function useTrack() {
  const ctx = useContext(AnalyticsContext);
  if (!ctx) {
    // Fail-soft: return a no-op to avoid crashes if provider not mounted
    return { track: (_event: string, _params?: TrackParams) => {} };
  }
  return ctx;
}