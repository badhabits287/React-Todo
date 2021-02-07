import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
   
    return(
        <div className="todo-list">
            {props.tasks.map((task,index) => (
                <Todo
                    toggleComplete={props.toggleComplete}
                    key={index}
                    task={task}
                />
            ))}
            <button className="" onClick={props.clearCompleted}>
            Clear{'\u2718'}
            </button>
        </div>
    )
}

export default TodoList;