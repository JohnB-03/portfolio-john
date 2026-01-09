import ProjectsCard from "./projectsCard";
import { projectsTab } from "./projectsTab";
import styles from "./projects.module.css";

export default function Projects() {
    const projects = projectsTab;
    return (
        <section id="Projects">
            <div className=" pl-10">
                <h1 className=" pb-10 text-4xl">Here is my projects...</h1>
                <div className="flex  place-self-center items-center justify-center  w-200 h-125 relative overflow-hidden border-2 rounded-2xl">
                    {projects.map((p, index) => (
                        (<div key={index} id={styles[`card_${index}`]}><ProjectsCard key={index} project={p}></ProjectsCard></div>)
                    ))}
                </div>
            </div>
        </section>
    );
} 