import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp/TodoApp';

// * - some es6 syntactic sugar:

// could be a functional component
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
