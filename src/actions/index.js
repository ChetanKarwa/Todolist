export const addTask = (data) => {
    return {
        type: "ADD_TASK",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: {
            id: id
        }
    }
}

export const toggleTask = (id) => {
    return {
        type: "TOGGLE_TASK",
        payload: {
            id: id
        }
    }
}
