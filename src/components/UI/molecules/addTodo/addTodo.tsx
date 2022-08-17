import { Button, Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { setTodoInput, addTodo } from "../../../../stores/actions";
import "./addTodo.css";

const AddTodo: React.FC = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useStore();
  const { todoInput } = state;

  //handle changeTodo
  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTodoInput(e.target.value));
  };

  //handle addTodo
  const addDataTodo = () => {
    if (todoInput !== "") {
      dispatch(addTodo(todoInput.trim()));
      dispatch(setTodoInput(""));
    }
  };

  return (
    <div className="add-todo-container">
      <Input.Group compact>
        <Input
          className="add-todo-input"
          placeholder={t("content.addPlaceholder")}
          value={todoInput}
          onChange={changeTodo}
          onPressEnter={addDataTodo}
        />
        <Button className="add-todo-btn" type="primary" onClick={addDataTodo}>
          {t("content.btnAdd")}
        </Button>
      </Input.Group>
    </div>
  );
};

export default AddTodo;
