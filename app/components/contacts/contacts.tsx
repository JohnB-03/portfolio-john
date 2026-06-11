import ContactForm from "./contactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPinned } from "lucide-react";
export default function Contacts() {
    return (
        <section id="Contacts">
            <div className="md:p-20 h-275 pl-3 pt-20">
                <div className="md:place-items-center md:pb-10 pb-5">
                    <h1 className="text-4xl p-5">Get in touch ?</h1>
                    <p>I'm currently looking for new opportunities !</p>
                    <p>Whether you have a question or just want to hop on Minecraft with me, feel free to reach out</p>
                </div>
                <div className=" grid  md:grid-cols-2 grid-cols-1 ">
                    <div className="md:w-90 w:50 h-35 flex flex-col gap-6">
                        <Card className="bg-transparent shadow-2xl">
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
                        <Card className="bg-transparent shadow-2xl">
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
                    <div className="md:pt-0 pt-85">
                        <ContactForm></ContactForm>
                    </div>
                </div >

            </div >
        </section>

    );
}

