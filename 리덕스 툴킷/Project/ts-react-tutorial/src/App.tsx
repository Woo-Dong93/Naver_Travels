import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './components/counter/CounterContainer';
import TodosContainer from './components/todo/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <br />
      <TodosContainer />
    </div>
  )
}

export default App;
