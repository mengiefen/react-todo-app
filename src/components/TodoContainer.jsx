import React from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

function TodoContainer() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
