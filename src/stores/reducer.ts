import { data } from "../mock/mockData";
import { getLocalStorage } from "../utils/getLocalStorange";
import {
  ADD_TAG,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SEARCH_TODO,
  SELECT_TAG_SEARCH,
  SET_DATA_INPUT,
  SET_IDX_EDIT,
} from "./constants";

interface typeInitState {
  todos: Array<{ id: number; tag: string; name: string }>;
  tags: Array<string>;
  todoInput: string;
  idxEdit: number;
  inputSearch: string;
  selectTagSearch: string;
}


const dataTodoLocal = getLocalStorage("todos", []);
const dataTagLocal = getLocalStorage("tags", []);

const initState: typeInitState = {
  todos: dataTodoLocal,
  tags: dataTagLocal,
  todoInput: "",
  idxEdit: 0,
  inputSearch: "",
  selectTagSearch: ""
};

function reducer(state: any, action: any): typeInitState {
  switch (action.type) {
    case SET_DATA_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };

    case ADD_TODO:
      const currentTodos = state.todos;
      const lastId = currentTodos[currentTodos.length - 1]?.id ?? 0;
      const newId = lastId + 1;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: newId, tag: action.payload.tag, name: action.payload.name },
        ],
      };

    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };

    case SELECT_TAG_SEARCH:
      return {
        ...state,
        selectTagSearch:  action.payload
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
