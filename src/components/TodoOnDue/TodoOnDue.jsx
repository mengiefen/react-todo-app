import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoOnDue.module.css';

export default function TodoOnDue(props) {
  const {
    id,
    title,
    completed,
    handleChecked,
    onDelete,
    handleTodoEdit,
  } = props;
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Cleaning up ....');
  }, [props]);

  const handleEditing = (e) => {
    setEditing(true);
    setText(e.target.textContent);
  };

  const handleEdit = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e, id) => {
    if (e.key === 'Enter') {
      handleTodoEdit(text, id);
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <div
      className={styles.todoItem}
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
        >
          STATUS
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.todoInput}
        value={text}
        onChange={handleEdit}
        onKeyDown={(e) => handleSubmit(e, id)}
      />
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

TodoOnDue.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleChecked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
};
