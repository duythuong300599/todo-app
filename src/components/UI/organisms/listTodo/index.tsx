import { Button, List } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Data } from "../../../../mock/mockData";
import { useStore } from "../../../../stores";
import ButtonEdit from "../../atoms/ButtonEdit";
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
            <List.Item
              key={i}
              actions={[
                <ButtonEdit item={item} />,
                <Button className="btn-delete" type="primary" danger>
                  {t("content.btn-del")}
                </Button>,
              ]}
            >
              {item}
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default ListTodo;
