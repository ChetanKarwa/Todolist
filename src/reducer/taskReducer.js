const initialData = {
    list: []
}
const taskReducer = (state = initialData, action) => {

    switch (action.type) {
        case "ADD_TASK":
            let id = action.payload.id
            let data = action.payload.data;
            let done = false;
            return {
                ...state, list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                        done: done
                    }]
            }
        case "DELETE_TASK":
            const newList = state.list.filter((task) => task.id !== action.payload.id)
            return {
                ...state,
                list: newList
            }
        case "TOGGLE_TASK":
            const updatedList = state.list.map((task) => {
                if (task.id !== action.payload.id) return task;
                task.done = !task.done;
                return task;
            })
            return {
                ...state,
                list: updatedList
            }

        default: {
            return state
        }
    }
}
export default taskReducer;