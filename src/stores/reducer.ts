interface typeInitState {
    todos: Array<[]>,
    todoInput: string
}

const initState: typeInitState = {
    todos: [],
    todoInput:""
}

function reducer(state:any , action:any):typeInitState {
 switch (action.type) {
    case "":
        //code here
        return state;
 
    default:
        return state;
 }
}

export { initState };
export type { typeInitState };
export default reducer