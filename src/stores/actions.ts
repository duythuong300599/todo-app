import { ADD_TODO, SET_DATA_INPUT } from "./constants"

export const setDataInput = (payload:string) => ({
    type: SET_DATA_INPUT,
    payload
})


export const addTodo = (payload:string) => ({
    type: ADD_TODO,
    payload
})

