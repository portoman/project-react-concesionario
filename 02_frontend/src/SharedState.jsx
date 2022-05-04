import { useState, createContext, useEffect } from "react";

export const Context = createContext();

//Componente que se comparte en toda la aplicación
export function ContextProvider ( {children} ) {

    const [ sharedState, setSharedState ] = useState({
        saludo: "Hola",
        cifra: 23,
        indice:0,
    });

    const actions = {
        setState: setSharedState,
    }

    const [ sharedContext, setSharedContext ] = useState({
        state: sharedState,
        actions
    })

    useEffect(
        ()=>{
            setSharedContext({
                state: sharedState,
                actions
            })
        },
        [sharedState]
    )

    return (
        <Context.Provider value={sharedContext}>
            {children}
        </Context.Provider>
    )
}