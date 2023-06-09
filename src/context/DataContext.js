import React,{createContext, useEffect, useState} from "react";

 export const DataContext = createContext({});

 export const DataProvider = (props) =>{
    const [todos, setTodos] = useState([])
    return(
        <DataContext.Provider value ={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
 }