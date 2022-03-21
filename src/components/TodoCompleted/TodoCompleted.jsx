import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsCheckAll, BsTrash } from 'react-icons/bs';
import styles from './TodoCompleted.module.css';

function TodoCompleted(props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');

  const handleEditing = (e) => {
    setEditing(true);
    setText(e.target.textContent);
  };

  const handleEdit = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const {
    id,
    title,
    completed,
    handleChecked,
    onDelete,
  } = props;
  const status = {
    borderLeft: '1rem solid #004400',
  };

  return (
    <div
      className={styles.todoItem}
      style={status}
    >
      <div style={viewMode} className={styles.todoInputGroup}>
        <input
          type="checkbox"
          className={styles.todoCheck}
          checked={completed}
          onChange={() => handleChecked(id)}
        />
        <p className={styles.todoText} onDoubleClick={handleEditing}>{title}</p>
        <span
          className={styles.todoStatus}
          style={{ color: 'green' }}
        >
          <BsCheckAll style={{ fontSize: '1.5rem' }} />
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.todoInput}
        value={text}
        onChange={handleEdit}
      />
      <button
        type="button"
        className={styles.todoDelete}
        onClick={() => onDelete(id)}
      >
        <BsTrash />
      </button>
    </div>
  );
}

TodoCompleted.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleChecked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TodoCompleted;
