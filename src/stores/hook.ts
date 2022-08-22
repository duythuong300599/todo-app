import {useContext} from "react"
import Context  from "./Context"

export const useStore = () => {
    const {state, dispatch} = useContext(Context);
    return {state, dispatch}
} 

export const getDataLocalStorage = (key: string, defaultValue: any) => {
    const value = localStorage.getItem(key)
    if(typeof value === "string"){
        return JSON.parse(value)
    }else{
        return defaultValue
    }
}