import React from 'react'

function ProjectDetails(props) {

    const projectId = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {projectId}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore perferendis culpa, 
                        illo illum sunt laboriosam consequuntur tempora cumque iusto sit rem odio harum recusandae architecto ab necessitatibus, 
                        sed saepe.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, repellendus. 
                        Est laborum illo a dolorem, similique facilis numquam. 
                        Corporis dicta expedita veritatis voluptates ut fuga ullam cumque incidunt reprehenderit sunt!
                    </p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By: Jordan Mateen</div>
                    <div>22 May 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
