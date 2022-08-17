import { ADD_TODO, SET_DATA_INPUT, TOGGLE_BNT_SAVE } from "./constants"

export const setDataInput = (payload:string) => ({
    type: SET_DATA_INPUT,
    payload
})


export const addTodo = (payload:string) => ({
    type: ADD_TODO,
    payload
})

export const toggleBtnSave = (payload:boolean) => ({
    type: TOGGLE_BNT_SAVE,
    payload
})

