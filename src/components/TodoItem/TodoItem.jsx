import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

export default class TodoItem extends PureComponent {
  render() {
    const statusStyle = {
      color: 'red',
    };
    const completedStatus = {
      color: 'green',
    };
    const { title, completed } = this.props;
    return (
      <div className={styles.todoItem}>
        <input
          type="checkbox"
          className={styles.todoCheck}
          checked={completed}
        />
        <p className={styles.todoText}>{title}</p>
        <span
          className={styles.todoStatus}
          style={completed ? completedStatus : statusStyle}
        >
          STATUS
        </span>
        <button type="button" className={styles.todoDelete}>
          Delete
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
