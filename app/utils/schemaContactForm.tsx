import { z } from "zod";

export const ContactFormSchema = z.object({
    mail: z
        .email({ message: "Please put an correct email" }),

    message: z
        .string()
        .min(10, { message: "Your message must have at least 10 characters" })
        .max(1500, { message: "Your message must have maximum 1500 characters" }),
})

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;