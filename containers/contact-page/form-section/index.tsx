"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/input/textarea";
import { cn } from "@/lib/utils";

export default function SignupFormDemo() {
  const [emailError, setEmailError] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      return "Email is required";
    }
    
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    
    // Check for common disposable email patterns
    const disposablePatterns = [
      /^.+@(10minutemail|tempmail|guerrillamail|mailinator|yopmail)\..*$/i,
      /^(test|example|admin|noreply)@/i
    ];
    
    if (disposablePatterns.some(pattern => pattern.test(email))) {
      return "Please use a permanent email address";
    }
    
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailValue(email);
    
    // Only validate if user has started typing and field has content
    if (email.length > 0) {
      const error = validateEmail(email);
      setEmailError(error);
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate email on submit
    const emailValidationError = validateEmail(emailValue);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }
    
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-white">
      {/* <h2 className="text-xl font-bold text-neutral-800 dark:text-slate-950">
        Let's get in touch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-slate-950">
        From our pastures to your plate, we&apos;re here to answer any questions or help with custom orders.
      </p> */}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label className="text-red-900 dark:text-red-900 font-bold" htmlFor="firstname">First name</Label>
            <Input className="dark:bg-gray-100" id="firstname" placeholder="Ricky" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-red-900 dark:text-red-900 font-bold" htmlFor="lastname">Last name</Label>
            <Input className="dark:bg-gray-100" id="lastname" placeholder="Bobby" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-red-900 dark:text-red-900 font-bold" htmlFor="email">Email Address</Label>
          <Input 
            className={cn(
              "dark:bg-gray-100",
              emailError ? "border-red-500 focus:border-red-500" : ""
            )}
            id="email" 
            placeholder="e.g. example@gmail.com" 
            type="email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={() => {
              // Validate on blur if field has content
              if (emailValue.length > 0) {
                const error = validateEmail(emailValue);
                setEmailError(error);
              }
            }}
          />
          {emailError && (
            <span className="text-red-500 text-xs mt-1">{emailError}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-red-900 dark:text-red-900 font-bold" htmlFor="phone">Phone Number</Label>
          <Input 
            className="dark:bg-gray-100" 
            id="phone" 
            placeholder="(123) 456-7890" 
            type="tel"
            maxLength={14}
            onKeyDown={(e) => {
              // Allow: backspace, delete, tab, escape, enter, home, end, left, right arrows
              if ([8, 9, 27, 13, 46, 35, 36, 37, 39].includes(e.keyCode) ||
                  // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                  (e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))) {
                return;
              }
              // Only allow numbers
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              // Remove all non-numeric characters
              const numbers = e.target.value.replace(/\D/g, '');
              
              // Format the number as (123) 456-7890
              let formattedValue = '';
              if (numbers.length > 0) {
                if (numbers.length <= 3) {
                  formattedValue = `(${numbers}`;
                } else if (numbers.length <= 6) {
                  formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
                } else {
                  formattedValue = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
                }
              }
              
              e.target.value = formattedValue;
            }}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label className="text-red-900 dark:text-red-900 font-bold" htmlFor="message">Message</Label>
          <Textarea className="dark:bg-gray-100" id="message" placeholder="Let us know how we can help" />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-red-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-red-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
