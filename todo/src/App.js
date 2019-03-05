import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from './components/TodoItem';
import './App.css';

// import { action } from './actions';
import { addTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    }
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: ""});
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="todoList">
          <form onSubmit={this.addTodo} className="add-form">
          <input 
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add New Todo Item"
          className="add-input"
        />
        <button type="submit" className="add-btn">Add</button>
        </form>
          {this.props.todoList.map(todo => {
            return <TodoItem todo={todo} key={todo.id}/>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps, { addTodo })(App);
