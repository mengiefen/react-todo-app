import React, { PureComponent } from 'react';
import styles from './TodoInput.module.css';

export default class TodoInput extends PureComponent {
  render() {
    return (
      <form className={styles.todoForm}>
        <input
          type="text"
          placeholder="Add your todos here"
          className={styles.todoInput}
        />
        <input type="submit" className={styles.todoAdd} value="Add" />
      </form>
    );
  }
}
