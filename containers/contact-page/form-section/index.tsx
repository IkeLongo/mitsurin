"use client";
import React from "react";
import { Label } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/input/textarea";
import { cn } from "@/lib/utils";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-white">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-slate-950">
        Let's get in touch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-slate-950">
        From our pastures to your plate, we&apos;re here to answer any questions or help with custom orders.
      </p>

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
          <Input className="dark:bg-gray-100" id="email" placeholder="e.g. example@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-red-900 dark:text-red-900 font-bold" htmlFor="phone">Phone Number</Label>
          <Input className="dark:bg-gray-100" id="phone" placeholder="e.g. +1234567890" type="tel" />
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
