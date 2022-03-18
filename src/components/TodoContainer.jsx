import React, { PureComponent } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

export default class TodoContainer extends PureComponent {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
