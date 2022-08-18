import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_DATA_INPUT,
  SET_IDX_EDIT,
  TOGGLE_BNT_SAVE,
} from "./constants";

interface typeInitState {
  todos: Array<string>;
  todoInput: string;
  stateBtnSave: boolean;
  idxEdit: number;
}

const initState: typeInitState = {
  todos: [
    "Challenges 1: Find a stupid photo of yourself at age 6, then laugh at how much of an idiot you were.",
    "Challenges 2: Watch YouTube till 5am.",
    "Challenges 3: Play a game where you have to get around your house without touching the ground.",
    "Challenges 4: Write your own story about something funny.",
  ],
  todoInput: "",
  stateBtnSave: false,
  idxEdit: 0,
};

function reducer(state: any, action: any): typeInitState {
  switch (action.type) {
    case SET_DATA_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_BNT_SAVE:
      return {
        ...state,
        stateBtnSave: action.payload,
      };
    case EDIT_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload.index, 1, action.payload.data);
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
      cloneTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: cloneTodos
      };
    default:
      return state;
  }
}

export { initState };
export type { typeInitState };
export default reducer;
