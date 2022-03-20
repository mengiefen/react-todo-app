import React from 'react';
import TodoContainer from '../components/TodoContainer';
import Header from '../components/Header/Header';

export default class TodoPage extends React.PureComponent {
  render() {
    return (
      <div className="todo-page">
        <Header />
        <TodoContainer />
      </div>
    );
  }
}
