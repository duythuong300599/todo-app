import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { addTodo } from "../../../../stores/actions";
import "./addTodo.css";

const AddTodo: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useStore();

  //messages add success
  const success = () => {
    message.success(t("content.successMsg"));
  };

  //messages add error
  const error = () => {
    message.error(t("content.errorMsg"));
  };

  //handle changeTodo
  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  //handle addTodo
  const addDataTodo = () => {
    if (input !== "") {
      setLoading(true);
      console.log("click");
      const fakeApi = setTimeout(() => {
        dispatch(addTodo(input.trim()));
        success();
        setInput("");
        setLoading(false);
      }, 2000);
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
          value={input}
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
