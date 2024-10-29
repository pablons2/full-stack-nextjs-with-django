import { Project } from "@/types/interfaces";
import { useProjects } from "./hooks/useProjects";



export default function Projects() {
    const { data, error, isLoading } = useProjects();

    if (isLoading) return <p>Loading projects...</p>;
    if (error) return <p>Error loading projects</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <ul>
                {data?.map((project: Project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}
