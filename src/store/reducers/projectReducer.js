const initialState = {
    projects: [
        {
            id: 1,
            title: "Project 1",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique",
        },
        {
            id: 2,
            title: "Project 2",
            content: "Loremur adipisicing elit. Similique",
        },
        {
            id: 3,
            title: "Project 3",
            content: "Loremur adi",
        },
    ],
};

const projectReducer = (state = initialState, action) => {
    return state;
};

export default projectReducer;
