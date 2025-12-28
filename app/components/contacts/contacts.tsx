import ContactForm from "./contactForm";

export default function Contacts() {
    return (
        <div id="Contacts" className=" h-screen flex pt-30">
            < div >
                <h1 className="text-xl p-3 font-bold">Are you interested for a new website for your company ?</h1>
                <h1 className="text-xl p-3 font-bold">Are you interested by me and my skills for your comapny ? </h1>
                <h2 className="text-lm p-3 ">Don't hesitate to contact me</h2>
            </div >
            <ContactForm></ContactForm>

        </div >
    );
}

