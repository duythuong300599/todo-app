import { Button, message } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { editTodo, setDataInput, setIdxEdit } from "../../../../stores/actions";
import ButtonDelete from "../../atoms/ButtonDel";
import InputEdit from "../../atoms/InputEdit";

import "./style.css";

interface Props {
  item: string;
  id: number;
}

const TodoItem: React.FC<Props> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);
  const [toggleSave, setToggleSave] = useState(false);
  const [name, setName] = useState(item);
  const { t } = useTranslation();
  const { state, dispatch } = useStore();
  const { idxEdit } = state;

  const handleToggleSave = () => {
    setToggleSave(true);
    setName(item);
    dispatch(setIdxEdit(id));
  };

  const success = () => {
    message.success(t("message.editSuccess"));
  };

  const error = () => {
    message.error(t("message.addError"));
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const saveDataTodo = () => {
    if (name.trim() !== "") {
      setLoading(true);
      setTimeout(() => {
        success();
        dispatch(editTodo({ data: name, id: idxEdit }));
        dispatch(setDataInput(""));
        setLoading(false);
        setToggleSave(false);
      }, 1000);
    } else {
      error();
    }
  };
  return (
    <div className="todo-item">
      <div className="todo-item-wrapper">
        {toggleSave ? (
          <InputEdit
            onChange={changeTodo}
            onPressEnter={saveDataTodo}
            name={name}
          ></InputEdit>
        ) : (
          item
        )}
        <div className="todo-item-btn">
          {toggleSave ? (
            <Button
              className="btn-edit"
              loading={loading}
              type="primary"
              onClick={saveDataTodo}
            >
              {t("content.btnSave")}
            </Button>
          ) : (
            <Button
              className="btn-edit"
              type="primary"
              onClick={handleToggleSave}
            >
              {t("content.btn-edit")}
            </Button>
          )}
          <ButtonDelete id={id} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
