import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_DATA_INPUT, SET_IDX_EDIT, TOGGLE_BNT_SAVE } from "./constants"

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

export const editTodo = (payload: {data: string, index: number}) => ({
    type: EDIT_TODO,
    payload
})

export const setIdxEdit = (payload: number) => ({
    type: SET_IDX_EDIT,
    payload
})

export const deleteTodo = (payload: number) => ({
    type: DELETE_TODO,
    payload
})
