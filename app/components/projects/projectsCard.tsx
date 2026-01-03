import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectsModel } from "./projectsTab";
import { Image } from "lucide-react";
import styles from "./projects.module.css";
function ProjectsCard({ project }: { project: ProjectsModel }) {
    function cardClick() {

    }
    return (
        <div className="">
            <Card className={styles.card}>
                <CardHeader className="p-0 justify-items-center">
                    <img src={project.img} className="h-60 w-full rounded-t-xl "></img>
                    <CardTitle className="font-bold text-2xl pb-3">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                    <p>{project.description}</p>
                    <p>Github Link : <a href={project.githubLink} target="_blank" className="hover:text-[#F1895C] hover:underline ">{project.githubLink}</a>
                    </p>
                    {
                        project.webSiteLink ?
                            (<p>WebSite Link : <a href={project.webSiteLink} target="_blank" className="hover:text-[#F1895C] hover:underline">{project.webSiteLink}</a></p>)
                            : <></>
                    }
                </CardContent>
            </Card>

        </div>
    );
}

export default ProjectsCard;