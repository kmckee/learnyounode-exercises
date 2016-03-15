import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="todoList">
        <table style={{ border: '2px solid black' }}>
        <tbody>
          <Todo title="Shopping">Milk</Todo>
          <Todo title="Hair cut">13:00</Todo>
        </tbody>
        </table>
      </div>
    );
  }
}
