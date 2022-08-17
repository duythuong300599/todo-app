import { Button, Input } from "antd";
import React, { useState } from "react";
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
    dispatch(addTodo(todoInput));
  };

  return (
    <div className="add-todo-container">
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 80px)" }}
          placeholder={t("content.addPlaceholder")}
          value={todoInput}
          onChange={changeTodo}
        />
        <Button style={{ width: "80px" }} type="primary" onClick={addDataTodo}>
          {t("content.btnAdd")}
        </Button>
      </Input.Group>
    </div>
  );
};

export default AddTodo;
