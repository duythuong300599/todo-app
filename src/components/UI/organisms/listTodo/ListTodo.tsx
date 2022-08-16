import { Button, List } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Data } from "../../../../mock/mockData";
import "./listTodo.css";

const ListTodo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="list-todo-wrapper">
      <h1 className="list-todo-title">{t("content.todo-title")}</h1>
      <div className="list-todo">
        <List
          bordered
          dataSource={Data}
          renderItem={(item: string) => (
            <List.Item
              actions={[
                <Button type="primary">Edit</Button>,
                <Button type="primary" danger>
                  Delete
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
