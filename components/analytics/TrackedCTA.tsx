"use client";

import Link from "next/link";
import { useTrack } from "@/components/analytics/AnalyticsProvider";

type TrackedCTAProps = {
  href: string;
  label: string;
  location?: string; // e.g. "Hero"
  className?: string;
  onClick?: () => void;
};

export function TrackedCTA({
  href,
  label,
  location = "Hero",
  className,
  onClick,
}: TrackedCTAProps) {
  const { track } = useTrack();

  return (
    <Link
      href={href}
      onClick={e => {
        track("cta_click", { label, location, href });
        if (onClick) onClick();
      }}
      className={className}
    >
      {label}
    </Link>
  );
}