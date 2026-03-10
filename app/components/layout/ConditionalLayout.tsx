"use client";

import { usePathname } from "next/navigation";
import MainNavbar from "@/app/components/layout/navbar/main-navbar";
import FooterSection from "@/app/components/layout/footers/footer";
import CookieBanner from "@/app/components/cookies/components/CookieBannerUI";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');
  
  // Pages with white backgrounds that need dark navbar styling
  const whiteBackgroundPages = ['/privacy', '/terms'];
  const forceVisibleNavbar = whiteBackgroundPages.includes(pathname || '');

  return (
    <>
      {!isStudioRoute && <MainNavbar forceVisible={forceVisibleNavbar} />}
      {children}
      {!isStudioRoute && <FooterSection />}
      {!isStudioRoute && <CookieBanner />}
    </>
  );
}