import ProjectsCard from "./projectsCard";
import { projectsTab } from "./projectsTab";
export default function Projects() {
    const projects = projectsTab;
    return (
        <div id="Projects" className=" pl-10">
            <h1 className=" pb-10 text-4xl ">Here is my projects...</h1>
            <div className="flex flex-wrap justify-center place-items-center gap-0">
                {projects.map((p, index) => (
                    (<ProjectsCard key={index} project={p}></ProjectsCard>)
                ))}
            </div>

        </div>
    );
}