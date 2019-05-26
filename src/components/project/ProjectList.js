import React from 'react'
import ProjectSummary from './ProjectSummary'
const ProjectList = ( { projects })=>{

    let projectList = projects.map( (project) =>{
        return (
             <ProjectSummary project = {project} key = {project.id}/>
        )
    })
    return (
        <div className="project-list section">
            {projects && projectList}
        </div>
    )
}

export default ProjectList