import { ref, push, serverTimestamp, set } from "firebase/database";

export const createProject = (project) => {
    return async (dispatch, getState, { db }) => {
        try {
            const projectsRef = ref(db, "projects");
            const newProjectRef = push(projectsRef);

            const projectData = {
                ...project,
                authorFirstName: "Yonatan",
                authorLastName: "Tzur",
                authorId: 12345,
                createdAt: serverTimestamp(),
            };

            await set(newProjectRef, projectData); // push create new file, set puts it inside

            dispatch({
                type: "CREATE_PROJECT",
                project: {
                    id: newProjectRef.key,
                    ...projectData,
                },
            });
        } catch (err) {
            console.error("Error adding project: ", err);
            dispatch({ type: "CREATE_PROJECT_ERROR", err: err.message });
        }
    };
};
