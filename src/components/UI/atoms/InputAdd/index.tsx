import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { addTodo, setDataInput } from "../../../../stores/actions";
import SelectTags from "../../molecules/SelectTags";

import "./style.css";

const InputAdd: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useStore();
  const { todos, todoInput } = state;
  const [selectTag, setSelectTag] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const success = () => {
    message.success(t("message.addSuccess"));
  };

  const error = () => {
    message.error(t("message.addError"));
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDataInput(e.target.value));
  };

  const handleSelectTag = (e: string) => {
    setSelectTag(e);
  };

  const addDataTodo = () => {
    if (todoInput.trim() !== "" && selectTag.trim() !== "") {
      setLoading(true);
      setTimeout(() => {
        dispatch(addTodo({ name: todoInput.trim(), tag: selectTag.trim() }));
        success();
        dispatch(setDataInput(""));
        setSelectTag("");
        setLoading(false);
      }, 1000);
    } else {
      error();
    }
  };

  return (
    <>
      <Input.Group compact>
        <Input
          className="add-todo-input"
          placeholder={t("content.addPlaceholder")}
          value={todoInput}
          onChange={changeTodo}
          onPressEnter={addDataTodo}
        />
        <SelectTags onChange={handleSelectTag} />
        <Button
          className="add-todo-btn"
          loading={loading}
          type="primary"
          onClick={addDataTodo}
        >
          {t("content.btnAdd")}
        </Button>
      </Input.Group>
    </>
  );
};

export default InputAdd;
