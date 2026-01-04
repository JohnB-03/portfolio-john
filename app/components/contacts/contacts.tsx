import ContactForm from "./contactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPinned } from "lucide-react";
export default function Contacts() {
    return (
        <div id="Contacts" className="p-20 h-200">
            <div className="place-items-center pb-10">
                <h1 className="text-2xl">Get in touch ?</h1>
                <p>I'm currently looking for new opportunities !</p>
                <p>Whether you have a question or just want to hop on Minecraft with me, feel free to reach out</p>
            </div>
            <div className="flex">
                <div className="w-90 h-35 flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className=" flex gap-3 text-xl">
                                <Mail />
                                Email
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a href="mailto:john.bourguignonpro@gmail.com" className="hover:text-[#F1895C] hover:underline"> john.bourguignonpro@gmail.com</a>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex gap-3 text-xl">
                                <MapPinned />
                                Location
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Dinant
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            Looking for a passionate and motivate junior developer to join your team ?
                            Let's talk about how I can contribute to your projects!
                        </CardContent>
                    </Card>
                </div >
                <ContactForm></ContactForm>
            </div>

        </div >
    );
}

