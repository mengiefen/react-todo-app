import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

export default class TodoItem extends PureComponent {
  render() {
    const todoItemCompleted = {
      borderLeft: '1rem solid #004400',
    };
    const statusCompleted = {
      color: 'green',
    };
    const {
      id,
      title,
      completed,
      handleChecked,
      onDelete,
    } = this.props;
    return (
      <div
        className={styles.todoItem}
        style={completed ? todoItemCompleted : {}}
      >
        <input
          type="checkbox"
          className={styles.todoCheck}
          checked={completed}
          onChange={() => handleChecked(id)}
        />
        <p className={styles.todoText}>{title}</p>
        <span
          className={styles.todoStatus}
          style={completed ? statusCompleted : {}}
        >
          STATUS
        </span>
        <button
          type="button"
          className={styles.todoDelete}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleChecked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
