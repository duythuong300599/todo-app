import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { searchTodo } from "../../../../stores/actions";
import InputSearch from "../../atoms/InputSearch";

import "./style.css";

const HeaderTodoList: React.FC = () => {
  const { t } = useTranslation();

  const [inputSearch, setInputSearch] = useState("");
  const timerRef = useRef<null | number>(null);
  const { dispatch } = useStore();

  const onSubmit = (value: string) => {
    dispatch(searchTodo(value.toLowerCase().trim()));
  };

  const changeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setInputSearch(value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onSubmit(value);
    }, 500);
  };
  return (
    <>
      <div className="header-todo-list">
        <h1 className="list-todo-title">{t("content.todo-title")}</h1>
        <InputSearch value={inputSearch} onChange={changeInputSearch} />
      </div>
    </>
  );
};

export default HeaderTodoList;
