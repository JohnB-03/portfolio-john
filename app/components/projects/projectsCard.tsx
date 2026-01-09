import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectsModel } from "./projectsTab";
import { Globe } from 'lucide-react';
import styles from "./projects.module.css";
function ProjectsCard({ project }: { project: ProjectsModel }) {
    return (
        <div>
            <Card className={styles.card}>
                <CardHeader className="p-0 justify-items-center">
                    <div className={styles.imageWrapper}>
                        <img src={project.img} className={styles.images}></img>
                    </div>
                    <CardTitle className="font-bold text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                    <p>{project.description}</p>
                    <div className="flex justify-center gap-2 pt-2">
                        {
                            project.githubLink ?
                                (<a href={project.githubLink} target="_blank"><img src="../images/github-mark-white.png" className="h-7 w-7 rounded-full hover:bg-[#F1895C]"></img></a>)
                                : <></>
                        }
                        {
                            project.webSiteLink ?
                                (<a href={project.webSiteLink} target="_blank" className="hover:text-[#F1895C]"><Globe size={28}></Globe></a>)
                                : <></>
                        }
                    </div>

                </CardContent>
            </Card>

        </div >
    );
}

export default ProjectsCard;