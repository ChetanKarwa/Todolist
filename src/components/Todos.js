import React from 'react'
import { addTask, deleteTask, toggleTask } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
function Todos() {
    const [input, setInput] = React.useState('');
    const list = useSelector((state) => state.taskReducer.list)
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" placeholder="Task" value={input} onChange={(e) => { setInput(e.target.value) }}></input>
            <button onClick={() => { dispatch(addTask(input)); setInput('') }}>Add</button>
            <div>
                {
                    list.map((task) => {
                        return (<div key={task.id}><span style={task.done === true ? { textDecorationLine: 'line-through' } : {}}>{task.data}</span><button onClick={() => dispatch(toggleTask(task.id))}>done</button><button onClick={() => dispatch(deleteTask(task.id))}>delete</button></div>)
                    })
                }
            </div>
        </div>
    )
}
export default Todos
