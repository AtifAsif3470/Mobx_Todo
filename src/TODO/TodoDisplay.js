import React from 'react'

const TodoDisplay = (props) => {
    return (
        <>
            <div className="row container-fluid">
                {props.todos.map((val, ind) => {
                    return (
                        <div className="card mx-2 my-2" style={{ width: "18rem" }} key={ind}>
                            <div className="card-body">
                                <h5 className="card-title text-white">Note ID {ind + 1}</h5>
                                <p className="card-text text-white">{val.title}</p>
                                <button className='btn btn-danger mx-2' onClick={() => props.deleteTodoData(val)}>Delete Data</button>
                                <button className='btn btn-secondary' onClick={() => props.editTodoData(val)}>Edit Data</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoDisplay;
