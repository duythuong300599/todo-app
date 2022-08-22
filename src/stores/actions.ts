import { ADD_TAG, ADD_TODO, DELETE_TODO, EDIT_TODO, SEARCH_TODO, SELECT_TAG, SET_DATA_INPUT, SET_IDX_EDIT } from "./constants"

export const setDataInput = (payload:string) => ({
    type: SET_DATA_INPUT,
    payload
})


export const addTodo = (payload:{name: string, tag: string}) => ({
    type: ADD_TODO,
    payload
})

export const addTag = (payload:string) => ({
    type: ADD_TAG,
    payload
})

export const selectTag = (payload:string) => ({
    type: SELECT_TAG,
    payload
})

export const editTodo = (payload: {data: string, id: number}) => ({
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

export const searchTodo = (payload: string) => ({
    type: SEARCH_TODO,
    payload
})

