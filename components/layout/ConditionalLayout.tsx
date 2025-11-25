"use client";

import { usePathname } from "next/navigation";
import MainNavbar from "@/components/ui/navigation/MainNavbar";
import FooterSection from "@/components/ui/navigation/footer";
import CookieBanner from "@/containers/cookies/cookies-banner";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');

  return (
    <>
      {!isStudioRoute && <MainNavbar />}
      {children}
      {!isStudioRoute && <FooterSection />}
      {!isStudioRoute && <CookieBanner />}
    </>
  );
}