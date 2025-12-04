"use client";

import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import ToggleSwitch from '@/components/ui/switch/toggle-switch';

interface PreferencesModalProps {
  isOpen: boolean; // ✅ Indicates if the modal is open
  onClose: () => void; // ✅ Function that closes the modal
}

export default function PreferencesModal({ isOpen, onClose }: PreferencesModalProps) {
  if (!isOpen) return null;
  const [isNecessary, setIsNecessary] = useState<boolean>(true);
  const [isFunctional, setIsFunctional] = useState<boolean>(true);
  const [isStatistical, setIsStatistical] = useState<boolean>(true);
  const [isMarketing, setIsMarketing] = useState<boolean>(true);

  useEffect(() => {
  const cookiePreferences = Cookies.get("cookiePreferences");
  if (cookiePreferences) {
    const preferences: { functional: boolean; statistical: boolean; marketing: boolean } = JSON.parse(cookiePreferences);
    setIsFunctional(preferences.functional);
    setIsStatistical(preferences.statistical);
    setIsMarketing(preferences.marketing);
  }
}, []);

// Accept an optional preferences object for always-up-to-date values
const updateCookiePreferences = (prefs?: { functional: boolean; statistical: boolean; marketing: boolean }) => {
  const preferences = prefs ?? {
    functional: isFunctional,
    statistical: isStatistical,
    marketing: isMarketing,
  };
  Cookies.set("cookiePreferences", JSON.stringify(preferences), { expires: 365, path: "/" });
  // Immediately read back the cookie to verify it was set
  const verify = Cookies.get("cookiePreferences");
};

  return (
    <>
      <Modal 
        backdrop="blur" 
        className="max-w-lg top-0" 
        scrollBehavior="inside" 
        isDismissable={false} 
        isOpen={isOpen} 
        onClose={onClose} 
        hideCloseButton={true}
        classNames={{
          wrapper: "items-center justify-center overflow-x-hidden",
          base: "max-h-[90vh] my-0",
        }}
      >
        <ModalContent 
          className="bg-transparent p-0 shadow-none !flex-none !h-auto !min-h-0"
          style={{ 
            flex: 'none',
            height: 'auto',
            minHeight: 'auto',
            display: 'block'
          }}
        >
          {(onClose) => (
            <div className="bg-gray-100 border-2 border-stone-800 rounded-lg w-full flex flex-col">
              <ModalHeader className="font-[montserrat] text-[24px] md:text-md font-semibold my-4 text-center text-stone-800 w-full flex justify-center items-center rounded-t-lg">
                Cookies & Your Privacy
              </ModalHeader>
              <ModalBody className='font-outfit text-[16px] text-stone-800'>
                <p className='text-left'>We use cookies to gather information about your interactions with our website. This helps us:</p>
                <ul className='list-decimal list-inside'>
                  <li className="text-stone-800"><strong>Enhance your browsing experience</strong> (functional)</li>
                  <li className="text-stone-800"><strong>Track page visits for analytics</strong> (statistics)</li>
                  <li className="text-stone-800"><strong>Deliver relevant promotions</strong> (marketing)</li>
                </ul>
                <p className='text-left'>
                  By clicking <strong>“OK”</strong>, you agree to our use of cookies for these purposes. 
                  You can also customize your preferences by selecting specific categories and clicking <strong>“Save settings.”</strong>
                </p>
                <p className='text-left'>
                  You may adjust or withdraw your consent anytime by clicking the icon in the bottom left corner. 
                  For more details on how we handle cookies and data, please review our 
                  <a href="/privacy#privacy-notice" className="text-royal-blue-500 hover:underline" onClick={onClose}> Privacy Policy</a> and 
                  <a href="/privacy#cookie-policy" className="text-royal-blue-500 hover:underline" onClick={onClose}> Cookie Policy</a>.
                </p>
                <p className='text-left'>
                  We adhere to 
                  <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer" className="text-royal-blue-500 hover:underline"> Google’s Business Data Responsibility guidelines </a>
                  to ensure transparency and control over your information.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p className='text-center'>Strictly Necessary</p>
                    <ToggleSwitch
                      defaultSelected={true}
                      isDisabled={true}
                      size="md"
                      isSelected={isNecessary}
                      onValueChange={(value) => {
                        setIsNecessary(value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-end items-center">
                    <p>Functional</p>
                    <ToggleSwitch
                      defaultSelected={true}
                      size="md"
                      isSelected={isFunctional}
                      onValueChange={(value) => {
                        setIsFunctional(value);
                        updateCookiePreferences({
                          functional: isFunctional,
                          statistical: isStatistical,
                          marketing: value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-end items-center">
                    <p>Statistical</p>
                    <ToggleSwitch
                      defaultSelected={true}
                      size="md"
                      isSelected={isStatistical}
                      onValueChange={(value) => {
                        setIsStatistical(value);
                        updateCookiePreferences({
                          functional: isFunctional,
                          statistical: isStatistical,
                          marketing: value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-end items-center">
                    <p>Marketing</p>
                    <ToggleSwitch
                      defaultSelected={true}
                      size="md"
                      isSelected={isMarketing}
                      onValueChange={(value) => {
                        setIsMarketing(value);
                        updateCookiePreferences({
                          functional: isFunctional,
                          statistical: isStatistical,
                          marketing: value,
                        });
                      }}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter
                className="bg-grey-700 w-full flex justify-center items-center p-4 rounded-b-lg"
              >
                <Button
                  variant="solid"
                  className='bg-red-900 text-white font-bold rounded-[10px]'
                  onPress={() => {
                    updateCookiePreferences();
                    onClose();
                  }}
                >
                  OK
                </Button>
                <Button
                  variant="bordered"
                  className="border-red-900 text-stone-800 font-bold rounded-[10px] border-2"
                  onPress={() => {
                    updateCookiePreferences();
                    onClose();
                  }}
                >
                  Save Settings
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}