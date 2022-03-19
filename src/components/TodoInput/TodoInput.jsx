import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
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
      <button type="submit" className={styles.todoAdd}>
        <FaPlusCircle />
      </button>
    </form>
  );
}

TodoInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
