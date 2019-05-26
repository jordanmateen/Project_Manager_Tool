import React from 'react'

const ProjectSummary = ( { project })=>{
    return(
        <div className = "card project-summary">
            <div className="card-content grey-text darken-3">
                <span className="card-title ">{project.title}</span>
                <p>Posted By Jordan Mateen</p>
                <p className = 'grey-text'> 22 May 2019</p>
            </div>
            <hr/>
        </div>
    )
}

export default ProjectSummary  