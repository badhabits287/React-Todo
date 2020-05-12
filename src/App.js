import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const tasks = [''];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
    
  }

  toggleComplete = taskId => {
    console.log("Capitans Log: @ index.js: App: toggleComplete: taskId ", taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        return task;
      })
    })
  }

  addTask = taskName => {
    console.log("Capitans Log:  @ index.js: App: addTask: taskName: ", taskName)
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: taskName, complete: false, id: Date.now() }
      ]
    })
  }

  clearCompleted = () => {
    console.log("Capitans Log: @ index.js: clearCompleted")
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.complete
      })
    })
  }

  render() {
    return (
      <center>
      <div className="App">
        <div className="header">
          <h1>Todo Test</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          toggleComplete={this.toggleComplete}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
      </center>
    );
  }
}

export default App;