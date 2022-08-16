import React, { createContext} from "react"
import { initState, typeInitState } from "./reducer";



const Context = createContext<{state : typeInitState, dispatch: React.Dispatch<any> }>({state: initState, dispatch: ()=> null});

export default Context