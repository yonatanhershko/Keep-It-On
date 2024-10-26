import React from "react";
import ProjectSummery from "./ProjectSummery";
const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects ? (
                projects.map((project) => {
                    return (
                        <ProjectSummery key={project.id} project={project} />
                    );
                })
            ) : (
                <h5>No projects yet</h5>
            )}
        </div>
    );
};
export default ProjectList;
