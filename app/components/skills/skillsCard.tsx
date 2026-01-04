import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillsModel } from "./skillsTab";


export default function SkillsCard({ skill }: { skill: SkillsModel }) {
    const levelPercentage = 100 / 6;

    function CalcSkillPercentage(level: number): string {
        return `${Math.round(levelPercentage * level)}%`;
    }

    return (
        <div>
            <Card className="w-100 h-110 border-2 opacity-60 hover:opacity-100 shadow-2xl transition delay-150 duration-300 ease-in-out hover:shadow-[#F1895C] hover:scale-105 hover:-translate-y-1">
                <CardHeader className="border-b justify-center">
                    <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    {skill.tabSkills.map(
                        (tabElem, index) => (
                            (
                                <div key={index} className="grid grid-cols-[3fr_1fr_1fr] gap-1 py-2.5 justify-around ">
                                    <p className="grid-template-columns-2">{tabElem.name} </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                    <div id="progressBar" style={{ "--width": CalcSkillPercentage(tabElem.level) }} className="pl-9 h-5 w-50 relative bg-[#2E3244] border-2 border-[#FFFFFF] rounded-md 
                                         before:bg-[#F1895C] before:content-[''] before:absolute before:w-[var(--width)] before:rounded-lg
                                        before:items-center before:flex before:min-w-1 before:max-w-48 before:left-0.5 before:top-0.5 before:bottom-0.5 before:p-0.5
                                        before:animate-load">
                                    </div>
                                    <p className="col-start-6">{CalcSkillPercentage(tabElem.level)}</p>
                                </div>

                            )
                        )
                    )}
                </CardContent>
            </Card>
        </div>
    );
}