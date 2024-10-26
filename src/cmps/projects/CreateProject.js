import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/action/projectAction";

class CreateProject extends Component {
    state = {
        title: "",
        content: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        console.log(this.state, "1");
        console.log(this.props, "2");
        console.log(this.props.createProject, "3");
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create New Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea
                            id="content"
                            className="materialize-textarea"
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
    };
};

const ConnectedCreateProject = connect(null, mapDispatchToProps)(CreateProject);
export default ConnectedCreateProject;
