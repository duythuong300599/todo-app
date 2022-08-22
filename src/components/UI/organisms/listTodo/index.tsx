import { List, Pagination } from "antd";
import React, { useMemo, useState } from "react";
import { useStore } from "../../../../stores";
import { pageSize } from "../../../../stores/constants";
import HeaderTodoList from "../../molecules/HeaderTodoList";
import TodoItem from "../../molecules/TodoItem";
import "./listTodo.css";

const ListTodo: React.FC = () => {
  const { state } = useStore();
  const { todos, inputSearch, selectTagSearch } = state;
  const [pagination, setPagination] = useState<{
    current: number;
    minIdx: number;
    maxIdx: number;
  }>({
    current: 1,
    minIdx: 0,
    maxIdx: 5,
  });

  const filterTodos = (lists: Array<any>) => {
    if (inputSearch === "") return lists;
    const res = lists.filter(
      (todo: { id: number; tag: string; name: string }) => {
        const search = todo.name.toLowerCase().includes(inputSearch);
        if (search) return todo;
      }
    );
    return res;
  };

  const handlesearch = () => {
    if (selectTagSearch === "all") return filterTodos(todos);
    const res = todos.filter(
      (todo: { id: number; tag: string; name: string }) => {
        const itemSearch = todo.tag
          .toLowerCase()
          .includes(selectTagSearch.toLowerCase());
        if (itemSearch) return todo;
      }
    );
    return filterTodos(res);
  };

  const dataTodo = useMemo(
    () => handlesearch(),
    [selectTagSearch, inputSearch, todos]
  );

  const handleChangePage = (page: number) => {
    setPagination({
      current: page,
      minIdx: (page - 1) * pageSize,
      maxIdx: page * pageSize,
    });
  };

  return (
    <div className="list-todo-wrapper">
      <HeaderTodoList />
      <div className="list-todo">
        {dataTodo.map(
          (item, i) =>
            i >= pagination.minIdx &&
            i < pagination.maxIdx && (
              <TodoItem key={item.id} item={item.name} id={item.id} />
            )
        )}
      </div>
      <Pagination
        className="pagination"
        pageSize={pageSize}
        defaultCurrent={1}
        onChange={handleChangePage}
        total={dataTodo.length}
        showSizeChanger={false}
      ></Pagination>
    </div>
  );
};

export default ListTodo;
