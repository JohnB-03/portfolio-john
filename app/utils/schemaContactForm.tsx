import { z } from "zod";

export const ContactFormSchema = z.object({
    phone: z
        .string()
        .regex(
            /^\+?[0-9\s-()]{7,20}$/,
            { message: "Veuillez entrer un numéro de téléphone valide" }
        ),
    message: z
        .string()
        .min(10, { message: "Votre message doit contenir au moins 10 caractères" })
        .max(1500, { message: "Votre message doit contenir maximum 1500 caractères" }),
})

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;