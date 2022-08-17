import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { addTodo, setDataInput } from "../../../../stores/actions";
import "./addTodo.css";

const AddTodo: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useStore();
  const { todoInput } = state;

  const success = () => {
    message.success(t("content.successMsg"));
  };

  const error = () => {
    message.error(t("content.errorMsg"));
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDataInput(e.target.value));
  };

  const addDataTodo = () => {
    if (todoInput.trim() !== "") {
      setLoading(true);
      setTimeout(() => {
        dispatch(addTodo(todoInput.trim()));
        success();
        dispatch(setDataInput(""));
        setLoading(false);
      }, 1000);
    } else {
      error();
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
        <Button
          className="add-todo-btn"
          loading={loading}
          type="primary"
          onClick={addDataTodo}
        >
          {t("content.btnAdd")}
        </Button>
      </Input.Group>
    </div>
  );
};

export default AddTodo;
