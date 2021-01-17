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
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
      );
  }
}

export default App;
