import React, { useState, useEffect } from 'react';
import { v4 as uid } from 'uuid';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import TodoListCompleted from './TodoListCompleted/TodoListCompleted';

function TodoContainer() {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleTodoEdit = (text, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: text };
        }
        return todo;
      }),
    );
  };

  const handleDelete = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleChecked = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const handleSubmit = (title) => {
    setTodos([...todos, { id: uid(), title, completed: false }]);
  };

  const onDueTodos = todos.filter((todo) => todo.completed === false);
  const compltedTodos = todos.filter(
    (todo) => todo.completed === true,
  );

  return (
    <>
      <TodoInput handleSubmit={handleSubmit} />
      <div className="todo-holder">
        <TodoList
          todos={onDueTodos}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          handleTodoEdit={handleTodoEdit}
        />
        <TodoListCompleted
          todos={compltedTodos}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          handleTodoEdit={handleTodoEdit}
        />
      </div>
    </>
  );
}

export default TodoContainer;
