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
    // for next tasks be aware that this data should come from the server
    console.log("Welcome ya gamad!");
    this.setState({todos: data});
  }
  toggleLike(todo){
    // * const todos = [...this.state.todos]
    const newTodos = this.state.todos.slice();
    // * _.forEach(todos, obj => {
    _.forEach(newTodos, function(obj) {
      // did you even check that its working??
      // since when we update something by its title and not its id?
      if(obj.title===todo.title)
        obj.isLike = !obj.isLike;
    });
    // * this.setState({todos});
    this.setState({todos: newTodos});
  }
  addNewTodo(term){
    // never use var! you can use let or const - in this case const
    // isLike is not really necessary
    // why call it term? why not title? the function should be dumb - get something and add to state
    // here you should add a unique id
    const newTodo = {title: term, isLike: false};
    // nice use of callback
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
