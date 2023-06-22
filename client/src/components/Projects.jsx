import { Spinner } from "react-bootstrap"
import { useQuery } from "@apollo/client"
import ProjectCard from "./ProjectCard"
import { GET_PROJECTS } from "../queries/projectQueries"

export default function Projects() {
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if(loading) return <Spinner animation='border' variant='primary' />
    if(error) return <p>Error </p>
  return (
    <div>
      { data.projects.length > 0 ? (
        <div className="row mt-5"> 
            {data.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      ) : (
        <p>No projects to show</p>
        )}
    </div>
  )
}
