import { Button, List } from "antd";
import React from "react";
import { Data } from "../../../../mock/mockData";
import "./listTodo.css";
import "antd/dist/antd.css";

const ListTodo: React.FC = () => {
  return (
    <div className="list-todo-wrapper">
      <h1 className="list-todo-title">Todo List</h1>
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
