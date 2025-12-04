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
  
  // Pages with white backgrounds that need dark navbar styling
  const whiteBackgroundPages = ['/privacy-policy', '/terms-and-conditions'];
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