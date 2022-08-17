import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useStore } from './stores';
import ListTodo from './components/UI/organisms/ListTodo';
import ChangeLanguage from './components/UI/molecules/ChangeLanguage';
import AddTodo from './components/UI/molecules/AddTodo';

function App() {
  return (
    <>
      <ChangeLanguage />
      <div className="todo-wrapper">
        <AddTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
