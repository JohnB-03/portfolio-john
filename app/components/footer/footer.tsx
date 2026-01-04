import tabNavElem from "@/app/utils/navTabUtils";
import { Mail, } from "lucide-react";

export default function Footer() {
    const classNameAnchor: string = "p-2 pr-6";
    return (
        <div className="h-auto color bg-[#516079] text-[#2E3244] p-4">
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 pb-3">
                <div>
                    <img src="../images/mePng.png" className="h-35 w-35 rounded-4xl"></img>
                    <p>John Bourguignon</p>
                    <p>Passionate junior web developer crafting beautiful digital experiences.</p>
                </div>
                <div>
                    <h1 className="text-2xl">Browse</h1>
                    <nav className=" flex flex-col">
                        {
                            tabNavElem.map((elem, index) => (
                                (<a key={index} className={classNameAnchor} href={`#${elem}`}>{elem}</a>)
                            ))
                        }
                    </nav>
                </div>
                <div>
                    <h1 className="text-2xl pb-3">Contact</h1>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/john-bourguignon-42673026a/" target="_blanck"><img src="../images/linkedin-black.png" className="h-6 w-6" /></a>
                        <a href="https://github.com/JohnB-03" target="_blank"><img src="../images/github-mark.png" className="h-6 w-6"></img></a>
                        <a href="mailto:john.bourguignonpro@gmail.com"><Mail size={26} /></a>
                    </div>

                </div>
            </div>
            <div className="flex justify-between border-t-2 border-[#2E3244]">
                <p>Made in NextJs if you want to know</p>
                <p>© 2026 John Bourguignon</p>
            </div>
        </div >
    );
}