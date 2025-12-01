import React from 'react'

const SelectProject = ({ project }) => {
    return (
        <div>
            <h2> {project.title}</h2>
            <h2> {project.description}</h2>
            <h1> TASK</h1>
        </div>
    )
}

export default SelectProject
