import React from 'react';
import PropTypes from 'prop-types';
import TodoOnDue from '../TodoOnDue/TodoOnDue';

export default function TodoList(props) {
  const {
    todos,
    handleChecked,
    handleDelete,
    handleTodoEdit,
  } = props;
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
            handleTodoEdit={handleTodoEdit}
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
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  handleChecked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
};
