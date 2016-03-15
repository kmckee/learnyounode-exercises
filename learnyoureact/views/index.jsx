import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class TodoBox extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
  );
  }
}
