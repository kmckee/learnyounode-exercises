import React from 'react';

export default class Todo extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <tr>
        <td style={{ border: '1px solid black' }}>{ this.props.title }</td>
        <td style={{ border: '1px solid black' }}>{ this.props.children }</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
};
