import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TodoCompleted from '../TodoCompleted/TodoCompleted';

export default class TodoListCompleted extends PureComponent {
  render() {
    const { todos, handleChecked, handleDelete } = this.props;
    return (
      <div className="completed-todos">
        <h2 className="completed-section-header">Completed Todos</h2>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <TodoCompleted
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
}

TodoListCompleted.defaultProps = {
  todos: [],
};

TodoListCompleted.propTypes = {
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
