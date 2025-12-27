'use client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInputs, ContactFormSchema } from "../../utils/schemaContactForm";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState, useTransition } from "react";
import { SendForm } from "../../actions/sendForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"




const ContactForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, startTransition] = useTransition();

    const form = useForm<ContactFormInputs>({
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange",
        defaultValues: {
            phone: "",
            message: "",
        }
    })

    const onSubmit = (data: ContactFormInputs) => {
        startTransition(async () => {
            const response = await SendForm(data);

            if (response.success) {
                setIsSuccess(true);
                form.reset({ phone: "", message: "" })
            } else {
                setIsSuccess(false);
                form.setError("root.serverError", {
                    message: response.message,
                    type: "500",
                })
            }
        })
    }
    return (
        <div>
            <Card className="w-75 lg:w-95 border-2 border-[#002e4c] shadow-xl">
                <CardHeader>
                    <CardTitle className="text-[#002e4c]">Contactez-nous</CardTitle>
                </CardHeader>
                {isSuccess ? (<CardContent>Votre message a été envoyé</CardContent>) :
                    (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <CardContent className="space-y-5">
                                    {form.formState.errors?.root?.serverError && (
                                        <Alert variant="destructive">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                            </svg>

                                            <AlertTitle>Erreur !</AlertTitle>
                                            <AlertDescription>
                                                {form.formState.errors?.root?.serverError?.message}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                    <FormField

                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[#002e4c]">Téléphone :</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Votre numéro de téléphone..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[#002e4c]">Message :</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Votre message..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Envoi..." : "Envoyer"}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Form>
                    )}
            </Card>
        </div>
    )
}

export default ContactForm;


