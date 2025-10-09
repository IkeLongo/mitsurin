import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot: should stay empty; bots often fill it
  company: z.string().max(0).optional(), 
});

export type ContactInput = z.infer<typeof ContactSchema>;