import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoInput.module.css';

function TodoInput(props) {
  const [title, setTitle] = useState('');
  const { handleSubmit } = props;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      handleSubmit(title);
      setTitle('');
    } else {
      alert('Please write todos');
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Add your todos here"
        className={styles.todoInput}
        value={title}
        onChange={handleChange}
      />
      <input type="submit" className={styles.todoAdd} value="Add" />
    </form>
  );
}

TodoInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
