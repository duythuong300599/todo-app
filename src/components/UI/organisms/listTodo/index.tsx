import { List } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import TodoItem from "../../molecules/TodoItem";
import "./listTodo.css";

const ListTodo: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useStore();

  return (
    <div className="list-todo-wrapper">
      <h1 className="list-todo-title">{t("content.todo-title")}</h1>
      <div className="list-todo">
        <List
          bordered
          dataSource={state.todos}
          renderItem={(item: string, i: number) => (
            <TodoItem item={item} index={i} />
          )}
        ></List>
      </div>
    </div>
  );
};

export default ListTodo;
