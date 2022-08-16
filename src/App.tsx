import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useStore } from "./stores";
import ListTodo from "./components/UI/organisms/listTodo/ListTodo";
import ChangeLanguage from "./components/UI/molecules/changeLanguage/changeLanguage";

function App() {
  const [count, setCount] = useState(0);
  const state = useStore();
  console.log(state);

  return (
    <>
      <ChangeLanguage />
      <ListTodo />
    </>
  );
}

export default App;
