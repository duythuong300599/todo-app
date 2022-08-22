export const getLocalStorage = (key: string, defaultValue: any) => {
    const value = localStorage.getItem(key)
    if(typeof value === "string"){
        return JSON.parse(value)
    }else{
        return defaultValue
    }
}