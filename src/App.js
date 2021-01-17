import './App.css';
import Todos from './components/Todos';
import React, {Component} from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Prepare dinner for Mrs',
        completed: true
      },
      {
        id: 3,
        title: 'Massage Max',
        completed: false
      }
    ]
  }

  toggleCompleted = (id) => {
    console.log(`${id} in app.js`)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          console.log(`Changing completed of todo item ${id}`);
          console.table(todo);
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
      </div>
      );
  }
}

export default App;
