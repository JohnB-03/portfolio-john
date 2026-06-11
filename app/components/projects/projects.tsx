
import ProjectsCard from "./projectsCard";
import { projectsTab } from "./projectsTab";
import styles from "./projects.module.css";

export default function Projects() {
    const projects = projectsTab;
    return (
        <section id="Projects">
            <div className="md:pl-10 pl-3">
                <h1 className=" pb-20 text-4xl">Here is my projects...</h1>
                <div className="flex  place-self-center items-center justify-center  md:w-200 md:h-125 w-90 h-110 relative overflow-hidden  rounded-2xl border-3">
                    {projects.map((p, index) => (
                        <ProjectsCard key={index} project={p} index={index}></ProjectsCard>)
                    )}
                </div>
            </div>
        </section>
    );
} 