import React, {Component} from 'react';
import _ from 'lodash';
import './style.css';

import TodoListItem from '../TodoListItem/TodoListItem';

class TodoList extends Component{
  constructor(props){
    super(props);

    this.renderList = this.renderList.bind(this);
  }
  renderList(){
    return _.map(this.props.todos, todo => {
      return(
        <TodoListItem key={todo.title} todo={todo}
         onDelete={this.props.onDelete} onUpdate={this.props.onUpdate} toggleLike={this.props.toggleLike} />
      );
    });
  }
  render(){
    return(
      <div className={`TodoList ${this.props.className}`}>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}
export default TodoList;
