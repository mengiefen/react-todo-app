import React from 'react';
import { v4 as uid } from 'uuid';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import TodoListCompleted from './TodoListCompleted/TodoListCompleted';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleTodoEdit = (text, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: text };
        }
        return todo;
      }),
    });
  };

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
    const onDueTodos = todos.filter(
      (todo) => todo.completed === false,
    );
    const compltedTodos = todos.filter(
      (todo) => todo.completed === true,
    );
    return (
      <>
        <TodoInput handleSubmit={this.handleSubmit} />
        <div className="todo-holder">
          <TodoList
            todos={onDueTodos}
            handleChecked={this.handleChecked}
            handleDelete={this.handleDelete}
            handleTodoEdit={this.handleTodoEdit}
          />
          <TodoListCompleted
            todos={compltedTodos}
            handleChecked={this.handleChecked}
            handleDelete={this.handleDelete}
            handleTodoEdit={this.handleTodoEdit}
          />
        </div>
      </>
    );
  }
}

export default TodoContainer;
