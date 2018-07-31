import React, {Component} from 'react';
import _ from 'lodash';
import './style.css';

import TodoListItem from '../TodoListItem/TodoListItem';

class TodoList extends Component{
  constructor(props){
    super(props);

    this.renderList = this.renderList.bind(this);
  }
  // onUpdate is a confusing name, since its not happening on an update, its actually suppose to be a verb - update
  // and its not even update, its very specific - updateTitle
  renderList(){
    // * todo => <TodoListItem ... (no return and no curly braces)
    return _.map(this.props.todos, todo => {
      // some improvements:
      // todo={...todo}
      // onDelete={() => this.props.onDelete(todo)} same for onUpdate and toggleLike
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
