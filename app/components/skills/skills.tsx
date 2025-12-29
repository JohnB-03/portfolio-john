import SkillsCard from "./skillsCard";
import { skillsTab } from "./skillsTab";

export default function Skills() {
    const skills = skillsTab;
    return (
        <div id="Skills" className="pt-20" >
            <h1>Here is my skills</h1>
            <div className="py-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                {
                    skills.map((skill, index) => (
                        (<SkillsCard key={index} skill={skill}></SkillsCard>)
                    )
                    )
                }
                <h1>Carrousel</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>


        </div>
    );
}