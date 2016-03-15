import React from 'react';

export default class TodoForm extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
}
