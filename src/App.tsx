import "./App.css";
import ListTodo from "./components/UI/organisms/listTodo";
import ChangeLanguage from "./components/UI/molecules/changeLanguage";
import GroupInput from "./components/UI/molecules/GroupInput";
import { useState } from "react";

function App() {
  return (
    <>
      <ChangeLanguage />
      <div className="todo-wrapper">
        <GroupInput />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
