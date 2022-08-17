import { ADD_TODO } from "./constants";

interface typeInitState {
  todos: Array<string>;
  todoInput: string;
}

const initState: typeInitState = {
  todos: [
    "Challenges 1: Find a stupid photo of yourself at age 6, then laugh at how much of an idiot you were.",
    "Challenges 2: Watch YouTube till 5am.",
    "Challenges 3: Play a game where you have to get around your house without touching the ground.",
    "Challenges 4: Write your own story about something funny.",
  ],
  todoInput: "",
};

function reducer(state: any, action: any): typeInitState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    default:
      return state;
  }
}

export { initState };
export type { typeInitState };
export default reducer;
