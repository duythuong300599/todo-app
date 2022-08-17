import { ADD_TODO } from "./constants"



export const addTodo = (payload:string) => ({
    type: ADD_TODO,
    payload
})

