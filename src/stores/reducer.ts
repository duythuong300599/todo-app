import { data } from "../mock/mockData";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SEARCH_TODO,
  SET_DATA_INPUT,
  SET_IDX_EDIT,
} from "./constants";

interface typeInitState {
  todos: Array<{ id: number; name: string }>;
  todoInput: string;
  idxEdit: number;
  inputSearch: string;
}

const initState: typeInitState = {
  todos: data,
  todoInput: "",
  idxEdit: 0,
  inputSearch: "",
};

function reducer(state: any, action: any): typeInitState {
  switch (action.type) {
    case SET_DATA_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      const newId = state.todos.length + 1;
      return {
        ...state,
        todos: [...state.todos, { id: newId, name: action.payload }],
      };
    case EDIT_TODO:
      const newTodos = [...state.todos];
      const idx = newTodos.findIndex((item) => item.id === action.payload.id);
      newTodos[idx].name = action.payload.data;
      return {
        ...state,
        todos: newTodos,
      };
    case SET_IDX_EDIT:
      return {
        ...state,
        idxEdit: action.payload,
      };
    case DELETE_TODO:
      const cloneTodos = [...state.todos];
      const res = cloneTodos.filter((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
      });
      return {
        ...state,
        todos: res,
      };
    case SEARCH_TODO:
      return {
        ...state,
        inputSearch: action.payload,
      };
    default:
      return state;
  }
}

export { initState };
export type { typeInitState };
export default reducer;
