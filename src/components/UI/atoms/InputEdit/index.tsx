import { Button, Input, message } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import {
  editTodo,
  setDataInput,
  toggleBtnSave,
} from "../../../../stores/actions";

const InputEdit: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useStore();
  const { todoInput, idxEdit } = state;

  const success = () => {
    message.success(t("message.editSuccess"));
  };

  const error = () => {
    message.error(t("message.addError"));
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDataInput(e.target.value));
  };

  const saveDataTodo = () => {
    if (todoInput.trim() !== "") {
      setLoading(true);
      setTimeout(() => {
        success();
        dispatch(editTodo({ data: todoInput, index: idxEdit }));
        dispatch(setDataInput(""));
        setLoading(false);
        dispatch(toggleBtnSave(false));
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
          onPressEnter={saveDataTodo}
        />
        <Button
          className="add-todo-btn"
          loading={loading}
          type="primary"
          onClick={saveDataTodo}
        >
          {t("content.btnSave")}
        </Button>
      </Input.Group>
    </>
  );
};

export default InputEdit;
