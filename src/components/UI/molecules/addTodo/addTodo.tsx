import { Button, Input } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import "./addTodo.css";

const AddTodo: React.FC = () => {
  const { t } = useTranslation();
  const [todo, setTodo] = useState<string>("");
  const { state, dispatch } = useStore();
  console.log(state);

  //handle changeTodo
  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  //handle addTodo
  const addTodo = () => {
    console.log(todo);
  };

  return (
    <div className="add-todo-container">
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 80px)" }}
          placeholder={t("content.addPlaceholder")}
          value={todo}
          onChange={changeTodo}
        />
        <Button style={{ width: "80px" }} type="primary" onClick={addTodo}>
          {t("content.btnAdd")}
        </Button>
      </Input.Group>
    </div>
  );
};

export default AddTodo;
