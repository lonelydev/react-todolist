import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import React, {Component} from 'react';
import Header from './components/layout/Header';
import AddTodoItem from './components/AddTodoItem';
import About from './components/pages/About';

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
        completed: false
      },
      {
        id: 3,
        title: 'Massage Max',
        completed: false
      }
    ]
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  
  deleteItem = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  addTodoItem = (title) =>{
    let max = 0;
    this.state.todos.forEach((todo) => {
      if (todo.id > max){
      max = todo.id;
    }});
    const newTodo = {
      id: max + 1,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className='container'>
        <Header></Header>
        <Route exact path="/" render={
          props => (
          <React.Fragment>
            <AddTodoItem addTodoItem={this.addTodoItem}></AddTodoItem>
            <Todos todos={this.state.todos} 
            toggleCompleted={this.toggleCompleted}
            deleteItem={this.deleteItem}/>
          </React.Fragment>
        )}></Route>
        <Route path="/about" component={About}>
        </Route>
        </div>
      </div>
      </Router>
      );
  }
}

export default App;
