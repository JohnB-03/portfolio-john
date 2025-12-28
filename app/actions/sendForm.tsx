"use server";

import { ContactFormInputs, ContactFormSchema } from "../utils/schemaContactForm";
import { EmailTemplate } from "./emailTemplate"
import { resend } from "../utils/mailsUtils";


export async function SendForm(input: ContactFormInputs) {
    try {
        const validatedData = ContactFormSchema.safeParse(input);

        if (!validatedData.success) {
            return {
                success: false,
                message: "Les données du formularies sont invalides"
            };
        }

        const { error } = await resend.emails.send({
            from: "Noreply <https://rotisseriedury.be/>",
            to: ['john.bourguignon2003@gmail.com'],
            subject: 'Demande de contact',
            react: EmailTemplate({
                mail: validatedData.data.mail,
                message: validatedData.data.message,
            }),
        });

        if (error) {
            throw error;
        }

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return {
            success: true,
            message: "Your message has been sent successfully"
        };

    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "An error occurred, please try again"
        };
    }
}