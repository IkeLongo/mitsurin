"use client";

import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";
import PreferencesModal from '../cookies-preferences-modal';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const cookiePreferences = Cookies.get("cookiePreferences");

    if (!cookiePreferences) {
      // ✅ Auto-set cookies when the banner opens
      const defaultPreferences = {
        functional: true,
        statistical: true,
        marketing: true,
      };

      Cookies.set("cookiePreferences", JSON.stringify(defaultPreferences), { expires: 365 });
      setShowBanner(true);
    }
  }, []);

  // ✅ Function to update cookie preferences
  const acceptAllCookies = () => {
    const preferences = {
      functional: true,
      statistical: true,
      marketing: true,
    };

    Cookies.set("cookiePreferences", JSON.stringify(preferences), { expires: 365 });
    setShowBanner(false);
  };

  // ✅ Function to configure cookies
  const configureCookies = () => {
    setShowBanner(false);
    setShowPreferences(true);
  };

  return (
    <>
      {showPreferences && (
        <PreferencesModal
          isOpen={showPreferences}
          onClose={() => setShowPreferences(false)}
        />
      )}

      <Drawer
        backdrop="opaque"
        placement="bottom"
        hideCloseButton={false}
        isDismissable={false}
        className="bg-gray-50 px-1 md:px-40 border-t-1 border-red-900"
        classNames={{
          backdrop: "z-[9999] bg-black/50",
          wrapper: "z-[10000]",
          base: "z-[10001]"
        }}
        isOpen={showBanner}
        shouldBlockScroll={false}
        onOpenChange={() => setShowBanner(false)}
      >
        <DrawerContent>
          {(onClose) => (
            <div className="mx-auto w-full">
              <DrawerHeader className="flex flex-col gap-1 font-[montserrat] text-[28px] text-stone-800 pb-0">
                We Respect Your Privacy
              </DrawerHeader>
              <DrawerBody>
                <p className='text-left text-stone-950 pb-0'>
                  We use cookies to tailor our website and services to your preferences, as well as
                  for analytics and performance tracking. By continuing to use our website and
                  products, you consent to our use of cookies.
                </p>
              </DrawerBody>
              <DrawerFooter className='justify-start'>
                <Button
                  variant="solid"
                  className="text-white font-bold rounded-[10px] cursor-pointer bg-red-900"
                  onPress={acceptAllCookies}
                >
                  Accept All
                </Button>
                <Button
                  variant="bordered"
                  className="text-stone-800 font-bold border-2 border-red-900 rounded-[10px] cursor-pointer"
                  onPress={configureCookies}
                >
                  Configure Cookies
                </Button>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}