import React from 'react';
import TodoContainer from './components/TodoContainer';
import Header from './components/Header/Header';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <TodoContainer />
      </div>
    );
  }
}
