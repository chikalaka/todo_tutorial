import React, {Component} from 'react';
import './style.css';
import _ from 'lodash';

import data from '../data.json';
import TodoList from '../TodoList/TodoList';
import NewBar from '../NewBar/NewBar';

class TodoApp extends Component{
  constructor(props){
    super(props);

    this.state = {todos: []};

    this.toggleLike = this.toggleLike.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  componentDidMount(){
    console.log("Welcome ya gamad!");    
    this.setState({todos: data});
  }
  toggleLike(todo){
    const newTodos = this.state.todos.slice();
    _.forEach(newTodos, function(obj) {
      if(obj.title===todo.title)
        obj.isLike = !obj.isLike;
    });
    this.setState({todos: newTodos});
  }
  addNewTodo(term){
    var newTodo = {title: term, isLike: false};
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }))
  }
  removeTodo(todo){
    this.setState((prevState) => ({
      todos: prevState.todos.filter((obj, i) => obj.title !== todo.title)
    }))
  }
  updateTodo(todo, newTerm){
    const newTodos = this.state.todos.slice();
    _.forEach(newTodos, function(obj) {
      if(obj.title===todo.title)
        obj.title = newTerm;
    });
    this.setState({todos: newTodos});
  }
  render(){
    return(
      <div className={`TodoApp ${this.props.className}`}>
        <NewBar onSubmit={this.addNewTodo} />
        <TodoList todos={this.state.todos} onDelete={this.removeTodo} onUpdate={this.updateTodo} toggleLike={this.toggleLike} />
      </div>
    );
  }
}

export default TodoApp;
