"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { cn } from "@/lib/utils";

import { ContactSchema, type ContactInput } from "@/lib/contact-schema";
import { Label } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/input/textarea";
import { MultiSelect } from "@/components/ui/input/multi-select";
import type { PremiumCut } from "@/types/premium-cuts";

export default function SignupFormDemo() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [premiumCuts, setPremiumCuts] = useState<PremiumCut[]>([]);
  const [cutsLoading, setCutsLoading] = useState(true);

  // Fetch premium cuts on component mount
  useEffect(() => {
    const fetchPremiumCuts = async () => {
      try {
        console.log('🔄 Fetching premium cuts from client...');
        const response = await fetch('/api/premium-cuts');
        if (!response.ok) throw new Error('Failed to fetch premium cuts');
        
        const cuts = await response.json();
        console.log('✅ Fetched premium cuts count:', cuts.length);
        console.log('📊 Premium cuts data:', cuts);
        setPremiumCuts(cuts);
      } catch (error) {
        console.error('❌ Failed to fetch premium cuts:', error);
        setPremiumCuts([]);
      } finally {
        setCutsLoading(false);
      }
    };

    fetchPremiumCuts();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      interestedCuts: [] as string[],
      company: "", // honeypot
    },
  });

  // Fix: Use SubmitHandler type for proper typing
  const onSubmit: SubmitHandler<ContactInput> = async (values) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed");

      toast.success('Thanks! Your message has been sent.', {
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


  // const onSubmit = async (values: ContactInput) => {
  //   setStatus("submitting");
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(values),
  //     });
  //     const json = await res.json();
  //     if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed");

  //     toast.success('Thanks! Your message has been sent.', {
  //       position: "bottom-right",
  //     });
  //     reset();
  //     setStatus("success");
  //   } catch (e) {
  //     console.error(e);
  //     toast.error('Something went wrong. Please try again.', {
  //       position: "bottom-right",
  //     });
  //     setStatus("error");
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
    <div className="shadow-input mx-auto w-full max-w-md bg-white p-4 rounded-2xl md:p-8 dark:bg-white">
      <div className="block lg:hidden">
        <h2 className="text-xl font-bold text-primary-800 dark:text-primary-900">
          Let's get in Touch
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-slate-950">
          From our pastures to your plate, we&apos;re here to answer any questions or help with custom orders.
        </p>
      </div>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label className="text-primary-800 dark:text-primary-800 font-bold" htmlFor="firstname">
              First name
            </Label>
            <Input 
              {...register("firstName")}
              className="dark:bg-gray-100" 
              id="firstname" 
              placeholder="Ricky" 
              type="text" 
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-primary-800 dark:text-primary-800 font-bold" htmlFor="lastname">
              Last name
            </Label>
            <Input 
              {...register("lastName")}
              className="dark:bg-gray-100" 
              id="lastname" 
              placeholder="Bobby" 
              type="text" 
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label className="text-primary-800 dark:text-primary-800 font-bold" htmlFor="email">
            Email Address
          </Label>
          <Input 
            {...register("email")}
            className={cn(
              "dark:bg-gray-100",
              errors.email ? "border-red-500 focus:border-red-500" : ""
            )}
            id="email" 
            placeholder="e.g. example@gmail.com" 
            type="email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-primary-800 dark:text-primary-800 font-bold" htmlFor="phone">
            Phone Number
          </Label>
          <Input 
            {...register("phone")}
            className="dark:bg-gray-100" 
            id="phone" 
            placeholder="(123) 456-7890" 
            type="tel"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-primary-800 dark:text-primary-800 font-bold" htmlFor="interestedCuts">
            Interested Cuts (Optional)
          </Label>
          <Controller
            name="interestedCuts"
            control={control}
            render={({ field }) => (
              <MultiSelect
                options={premiumCuts.map(cut => ({
                  value: cut.name,
                  label: cut.name,
                  availability: cut.availability
                }))}
                placeholder={cutsLoading ? "Loading cuts..." : "Select cuts you're interested in..."}
                className="dark:bg-gray-100"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.interestedCuts && (
            <span className="text-red-500 text-xs mt-1">{errors.interestedCuts.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label className="text-primary-800 dark:text-primary-800 font-bold" htmlFor="message">
            Message
          </Label>
          <Textarea 
            {...register("message")}
            className="dark:bg-gray-100" 
            id="message" 
            placeholder="Let us know how we can help" 
          />
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
          )}
        </LabelInputContainer>

        {/* Hidden honeypot field */}
        <input 
          {...register("company")} 
          type="text" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off"
        />

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-primary-800 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-primary-800 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer disabled:opacity-50"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message →"}
          <BottomGradient />
        </button>

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-accent-dark to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-accent-dark to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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
