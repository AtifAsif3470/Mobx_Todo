import { Button } from "antd";
import { useState } from "react";
import { observer } from 'mobx-react-lite';
import todoStore from "./Mobx/userStore";
import TodoDisplay from "./TodoDisplay";

const TodoApp = observer(() => {
    const { todos, addTodo, removeTodo, editTodo } = todoStore;
    const [inPut, setInPut] = useState("");
    const [data, setData] = useState("")
    const [state, setState] = useState(false)

    const handleAddTodo = () => {
        if (inPut !== "") {
            addTodo(inPut)
        }
        setInPut("")
    }
    const deleteTodoData = (data) => {
        removeTodo(data)
    }
    const editTodoData = (todo) => {
        setInPut(todo.title)
        setState(true)
        setData(todo)
    }
    const UpdateTodoData = () => {
        editTodo(inPut, data)
        setInPut("")
        setState(false)
    }
    return (
        <>
            <div className='App'>
                <div className="container my-3">
                    <h1 className='text-white'>Welcome To Todo List</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-white">ADD A NOTE</h5>
                            <div className="form-group">
                                <textarea
                                    className="form-control my-2"
                                    value={inPut}
                                    onChange={event => setInPut(event.target.value)}
                                    id="addTxt"
                                    rows="3"></textarea>
                                <input type="hidden" id="saveIndex" />
                            </div>
                            {state ? (<Button type="primary" onClick={UpdateTodoData}>Update Todo</Button>) :
                                (<Button type="primary" onClick={handleAddTodo}>Add Note</Button>)
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white'>Your Notes</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <TodoDisplay editTodoData={editTodoData} deleteTodoData={deleteTodoData} todos={todos} />
        </>
    )
});
export default TodoApp;