import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillsModel } from "./skillsTab";



export default function SkillsCard({ skill }: { skill: SkillsModel }) {
    const levelPercentage = 100 / 6;

    function CalcSkillPercentage(level: number): string {
        return `${Math.round(levelPercentage * level)}%`;
    }

    return (
        <div>
            <Card className="w-115 h-100">
                <CardHeader>
                    <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    {skill.tabSkills.map(
                        (tabElem, index) => (
                            (
                                <div key={index} className="grid grid-cols-4 gap-2 py-2 justify-around ">
                                    <p className="">{tabElem.name} : </p>
                                    <div id="progressBar" style={{ "--dynamic-width": CalcSkillPercentage(tabElem.level) }} className="pl-9 h-5 w-50 relative bg-[#2E3244] border-2 border-[#FFFFFF] rounded-md 
                                         before:bg-[#F1895C] before:content-[''] before:absolute before:w-[var(--dynamic-width)] before:rounded-lg
                                        before:items-center before:flex before:min-w-1 before:max-w-48 before:left-0.5 before:top-0.5 before:bottom-0.5 before:p-0.5">
                                    </div>
                                    <p className="col-start-4">{CalcSkillPercentage(tabElem.level)}</p>
                                </div>

                            )
                        )
                    )}
                </CardContent>
            </Card>
        </div>
    );
}