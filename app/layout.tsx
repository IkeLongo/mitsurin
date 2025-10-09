import MainNavbar from "@/components/ui/navigation/MainNavbar";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitsurin Wagyu Beef",
  description: "Premium Japanese Wagyu beef from Mitsurin Ranch",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />

        {/* Expose --vvh and --ios-bottom-ui so components can use them */}
        <Script id="vvh-setup" strategy="beforeInteractive">
          {`
            (function () {
              var docEl = document.documentElement;
              function isIOS() {
                var ua = navigator.userAgent || '';
                return /iP(hone|od|ad)/.test(navigator.platform) ||
                       (ua.includes('Mac') && 'ontouchend' in document);
              }
              function setVars() {
                var vv = window.visualViewport;
                // Visible viewport height (fallback to innerHeight)
                var vvh = (vv && vv.height) ? vv.height : window.innerHeight;
                docEl.style.setProperty('--vvh', vvh + 'px');

                // How much UI overlays the layout viewport at the bottom on iOS Safari
                var hidden = (typeof window.innerHeight === 'number' && vv)
                  ? (window.innerHeight - vv.height)
                  : 0;
                var bottomUi = (isIOS() && hidden > 0) ? Math.ceil(hidden) : 0;
                docEl.style.setProperty('--ios-bottom-ui', bottomUi + 'px');
              }
              setVars();
              if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', setVars);
                window.visualViewport.addEventListener('scroll', setVars);
              }
              window.addEventListener('orientationchange', setVars);
              window.addEventListener('resize', setVars);
            })();
          `}
        </Script>
      </head>
      <body
        className={`antialiased`}
        style={{
          // Prefer dynamic viewport height where supported
          height: "100dvh",
          // Fallback for older Safari: use the JS-computed --vvh
          minHeight: "var(--vvh, 100svh)",
          // Always respect the hardware safe area at the bottom
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
