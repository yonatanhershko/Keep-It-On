import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetials(props) {
    const { id } = useParams();
    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
}
