import React, {Component} from 'react';
import './style.css';

class NewBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''}
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(e){
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({term: ''});
  }
  render(){
    return(
      <div className={`NewBar ${this.props.className}`}>
        <form onSubmit={this.addTodo}>
          <input type='text' placeholder='type new todo...' value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value}) }
          />
        </form>
      </div>
    );
  }
}

export default NewBar;
