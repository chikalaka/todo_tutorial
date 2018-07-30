import React, {Component} from 'react';
import './style.css';
import MyButton from '../MyButton/MyButton';

class TodoListItem extends Component{
  constructor(props){
    super(props);
    const todo = this.props.todo;
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
    this.props.onUpdate(this.props.todo, this.state.term); //TodoApp method
    this.toggleEdit();
  }
  render(){
    const todo = this.props.todo;
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
