import React from 'react';
import PropTypes from 'prop-types';
import TodoOnDue from '../TodoOnDue/TodoOnDue';

export default function TodoList(props) {
  const { todos, handleChecked, handleDelete } = props;
  return (
    <div className="ondue-todos">
      <h2>OnDue Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <TodoOnDue
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleChecked={handleChecked}
            onDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  handleChecked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
