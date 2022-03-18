import React from 'react';
import { v4 as uid } from 'uuid';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uid(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uid(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uid(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleChecked = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  handleSubmit = (title) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { id: uid(), title, completed: false },
      ],
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoInput handleSubmit={this.handleSubmit} />
        <TodoList
          todos={todos}
          handleChecked={this.handleChecked}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default TodoContainer;
