import { z } from "zod";
import isDisposableEmail from "is-disposable-email";

export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string()
    .email("Enter a valid email")
    .refine(
      (val) => !isDisposableEmail(val),
      { message: "Disposable email addresses are not allowed" }
    )
    .refine(
      (val) => !/^(test|example)@/i.test(val),
      { message: "Please use your real email address" }
    ),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine(
      (val) => {
        // Remove all non-digit characters
        const digitsOnly = val.replace(/\D/g, '');
        // US phone numbers should have 10 digits
        return digitsOnly.length === 10;
      },
      { message: "Please enter a valid 10-digit US phone number" }
    )
    .refine(
      (val) => {
        // Basic format validation - allows common US phone formats
        const phoneRegex = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
        return phoneRegex.test(val);
      },
      { message: "Please enter a valid phone number format (e.g., (555) 123-4567)" }
    )
    .refine(
      (val) => {
        // Check for obviously fake numbers
        const digitsOnly = val.replace(/\D/g, '');
        const invalidPatterns = [
          /^0000000000$/, // All zeros
          /^1111111111$/, // All ones
          /^1234567890$/, // Sequential
          /^0987654321$/, // Reverse sequential
          /^5555555555$/, // All fives
        ];
        return !invalidPatterns.some(pattern => pattern.test(digitsOnly));
      },
      { message: "Please enter a valid phone number" }
    ),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot: should stay empty; bots often fill it
  company: z.string().max(0).optional(), 
});

export type ContactInput = z.infer<typeof ContactSchema>;