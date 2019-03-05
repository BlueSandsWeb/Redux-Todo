import React from 'react';

// import { action } from '../actions';

class TodoItem extends React.Component {
  constructor(props){
    super(props);
  }

  delTodo() {
    this.props.delTodo(this.state.delTodo);
  }

  render(){
    return (
      <div className="todo-item">
        <input type="checkbox" className="todo-item-checkbox" />
        <p className="todo-item-text">{this.props.todo.text}</p>
        <button className="todo-item-remove" onClick={this.delTodo}>X</button>
      </div>
    );
  }
  }

export default TodoItem;