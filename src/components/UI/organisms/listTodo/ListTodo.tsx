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
          dataSource={t("content.data", { returnObjects: true })}
          renderItem={(item: string) => (
            <List.Item
              actions={[
                <Button style={{ width: "100px" }} type="primary">
                  {t("content.btn-edit")}
                </Button>,
                <Button style={{ width: "80px" }} type="primary" danger>
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
