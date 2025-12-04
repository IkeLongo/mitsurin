"use client";

import React, { useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/input/textarea";

import { z } from "zod";

// Privacy Request Schema
const PrivacyRequestSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Address must be at least 5 characters").max(200, "Address must be less than 200 characters"),
  requestType: z.string().min(1, "Request type is required"),
  description: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

type PrivacyRequestInput = z.infer<typeof PrivacyRequestSchema>;

// Define your selections array
const selections = [
  { key: 'data-access', label: 'Request Access to My Data' },
  { key: 'data-deletion', label: 'Request Deletion of My Data' },
  { key: 'data-correction', label: 'Request Correction of My Data' },
  { key: 'data-portability', label: 'Request Data Portability' },
  { key: 'opt-out', label: 'Opt-out of Data Sale/Sharing' },
  { key: 'other', label: 'Other Privacy Request' },
];

export default function PrivacyContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PrivacyRequestInput>({
    resolver: zodResolver(PrivacyRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      requestType: "",
      description: "",
    },
  });

  const onSubmit = async (values: PrivacyRequestInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/subject-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed");

      toast.success('Privacy request submitted successfully!', {
        position: "bottom-right",
      });
      reset();
      setStatus("success");
    } catch (e) {
      console.error(e);
      toast.error('Something went wrong. Please try again.', {
        position: "bottom-right",
      });
      setStatus("error");
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-2xl bg-stone-50 p-4 rounded-2xl md:p-8">
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        {/* First and Last Name - Side by side */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label className="text-stone-800 font-bold font-oxanium" htmlFor="firstName">
              First Name
            </Label>
            <Input 
              {...register("firstName")}
              className={cn(
                "bg-stone-100 border-stone-300 text-stone-900 placeholder:text-stone-500 font-oxanium",
                errors.firstName ? "border-red-500 focus:border-red-500" : ""
              )}
              id="firstName" 
              placeholder="First Name" 
              type="text" 
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs mt-1 font-oxanium">{errors.firstName.message}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-stone-800 font-bold font-oxanium" htmlFor="lastName">
              Last Name
            </Label>
            <Input 
              {...register("lastName")}
              className={cn(
                "bg-stone-100 border-stone-300 text-stone-900 placeholder:text-stone-500 font-oxanium",
                errors.lastName ? "border-red-500 focus:border-red-500" : ""
              )}
              id="lastName" 
              placeholder="Last Name" 
              type="text" 
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs mt-1 font-oxanium">{errors.lastName.message}</span>
            )}
          </LabelInputContainer>
        </div>

        {/* Email and Address - Side by side */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label className="text-stone-800 font-bold font-oxanium" htmlFor="email">
              Email Address
            </Label>
            <Input 
              {...register("email")}
              className={cn(
                "bg-stone-100 border-stone-300 text-stone-900 placeholder:text-stone-500 font-oxanium",
                errors.email ? "border-red-500 focus:border-red-500" : ""
              )}
              id="email" 
              placeholder="e.g. example@gmail.com" 
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1 font-oxanium">{errors.email.message}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-stone-800 font-bold font-oxanium" htmlFor="address">
              Address
            </Label>
            <Input 
              {...register("address")}
              className={cn(
                "bg-stone-100 border-stone-300 text-stone-900 placeholder:text-stone-500 font-oxanium",
                errors.address ? "border-red-500 focus:border-red-500" : ""
              )}
              id="address" 
              placeholder="Your address" 
              type="text"
            />
            {errors.address && (
              <span className="text-red-500 text-xs mt-1 font-oxanium">{errors.address.message}</span>
            )}
          </LabelInputContainer>
        </div>

        {/* Request Type Select */}
        <LabelInputContainer className="mb-4">
          <Label className="text-stone-800 font-bold font-oxanium" htmlFor="requestType">
            Request Type
          </Label>
          <select 
            {...register("requestType")}
            className={cn(
              "flex h-10 w-full border-1 border-stone-200 hover:border-2 hover:border-amber-500 bg-white px-3 py-2 text-sm font-oxanium text-stone-900 hover:cursor-pointer placeholder:text-stone-500 focus:border-amber-500 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-md",
              errors.requestType ? "border-red-500 focus:border-red-500" : ""
            )}
            id="requestType"
          >
            <option value="" className="text-stone-500">Select request type</option>
            {selections.map((selection) => (
              <option key={selection.key} value={selection.key} className="text-stone-900">
                {selection.label}
              </option>
            ))}
          </select>
          {errors.requestType && (
            <span className="text-red-500 text-xs mt-1 font-oxanium">{errors.requestType.message}</span>
          )}
        </LabelInputContainer>

        {/* Description Textarea */}
        <LabelInputContainer className="mb-8">
          <Label className="text-stone-800 font-bold font-oxanium" htmlFor="description">
            Description
          </Label>
          <Textarea 
            {...register("description")}
            className={cn(
              "bg-stone-100 border-stone-300 text-stone-900 placeholder:text-stone-500 font-oxanium min-h-[120px]",
              errors.description ? "border-red-500 focus:border-red-500" : ""
            )}
            id="description" 
            placeholder="Describe your privacy request in detail" 
          />
          {errors.description && (
            <span className="text-red-500 text-xs mt-1 font-oxanium">{errors.description.message}</span>
          )}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-stone-800 font-medium text-stone-50 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] font-oxanium cursor-pointer disabled:opacity-50 transition-all duration-300 hover:shadow-lg"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting..." : "Submit Privacy Request →"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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