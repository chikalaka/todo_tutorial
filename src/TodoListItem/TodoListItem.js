import React, {Component} from 'react';
import './style.css';
import MyButton from '../MyButton/MyButton';

// why not TodoItem? why should it care if he is a part of a list or not?
class TodoListItem extends Component{
  constructor(props){
    super(props);
    // * const {todo} = this.props
    const todo = this.props.todo;
    // again, why call it term when it is actually a title
    this.state = {onEdit: false, term: todo.title}

    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }
  toggleEdit(){
    this.setState((prevState) => {
      return {onEdit: !prevState.onEdit};
    });
  }
  save(){
    this.props.onUpdate(this.props.todo, this.state.term); //TodoApp method - we shouldn't care where the method came from
    this.toggleEdit();
  }
  render(){
    const todo = this.props.todo;
    // as a convention, a class name in TodoListItem component should always start with 'TodoListItem'
    // it doesn't matter if you pass it to div or to MyButton
    // the reason is if tomorrow you would want another component that is calling MyButton there could be collisions
    return(
      <li className={`TodoListItem ${todo.isLike && `liked`}`}>
        {this.state.onEdit ? <input type='text' value={this.state.term} onChange={(e)=>this.setState({term: e.target.value})} /> : todo.title}
        <MyButton className='MyButton-Like'   text={todo.isLike ? '+' : '-'} onClick={() => this.props.toggleLike(todo)} />
        <MyButton className='MyButton-Edit'   text={this.state.onEdit ? 'Save' : 'Edit'} onClick={this.state.onEdit ? this.save : this.toggleEdit} />
        <MyButton className='MyButton-Delete' text='Del'  onClick={() => this.props.onDelete(todo)} />
      </li>
    );
  }
}

export default TodoListItem;
