import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import React, {Component} from 'react';
import Header from './components/layout/Header';
import AddTodoItem from './components/AddTodoItem';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    }));
  }

  addTodoItem = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    }).then(
      res => this.setState({
        todos: [...this.state.todos, res.data]
      })
    );    
  }

  /* another component lifecycle method like render() 
     fetch todos from the json api
   */
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
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
