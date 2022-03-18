import React, { PureComponent } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends PureComponent {
  render() {
    const { todos, handleChecked, handleDelete } = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleChecked={handleChecked}
            onDelete={handleDelete}
          />
        ))}
      </div>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.objectOf(
      oneOfType(
        PropTypes.bool.isRequired,
        PropTypes.string.isRequired,
      ),
    ),
  ),
  handleChecked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
