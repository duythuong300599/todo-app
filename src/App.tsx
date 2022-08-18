import "./App.css";
import ListTodo from "./components/UI/organisms/ListTodo";
import ChangeLanguage from "./components/UI/molecules/ChangeLanguage";
import GroupInput from "./components/UI/molecules/GroupInput";

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
