import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain a lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain an uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain a number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain a special character",
    }),
});

export const contactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  title: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long" })
    .max(100, { message: "Subject must be at most 100 characters long" }),
  description: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1000, { message: "Message must be at most 1000 characters long" }),
});

// Type inference
// type FormData = z.infer<typeof userSchema>;
// type ContactFormData = z.infer<typeof contactSchema>;
