import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be minimum 2 characters long"),
  lastName: z.string().min(2, "Last name must be minimum 2 characters long"),
  email: z.string().email(),
  message: z.string().min(2, "Message must be minimum 2 characters long"),
  phone: z
    .string()
    .refine(
      (v) => isValidPhoneNumber(v, "IN"),
      "Please specify a valid Indian phone number.",
    ),
  subject: z.string(),
});
