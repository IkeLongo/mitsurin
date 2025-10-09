"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/input/textarea";
import { cn } from "@/lib/utils";
import { ContactSchema, type ContactInput } from "@/lib/contact-schema";
import { toast } from "react-toastify";

export default function SignupFormDemo() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      company: "", // honeypot
    },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed");

      // On success:
      toast.success('Thanks! Your message has been sent.', {
        position: "bottom-right",
      });
      reset();
      setStatus("idle");
    } catch (e) {
      console.error(e);
      // On error:
      toast.error('Something went wrong. Please try again.', {
        position: "bottom-right",
      });
      setStatus("idle");
    } finally {
      // leave success/error visible; remove if you want it to auto-hide
    }
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-transparent p-4 md:rounded-2xl md:p-8 dark:bg-transparent">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Let's get in touch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        From our pastures to your plate, we&apos;re here to answer any questions or help with custom orders.
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Honeypot (bots will fill this; humans won't see it) */}
        <div className="hidden">
          <Label htmlFor="company">Company</Label>
          <Input id="company" type="text" autoComplete="off" {...register("company")} />
        </div>

        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Ricky"
              type="text"
              aria-invalid={!!errors.firstName || undefined}
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Bobby"
              type="text"
              aria-invalid={!!errors.lastName || undefined}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="e.g. example@gmail.com"
            type="email"
            aria-invalid={!!errors.email || undefined}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Let us know how we can help"
            rows={6}
            aria-invalid={!!errors.message || undefined}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-60 dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
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
