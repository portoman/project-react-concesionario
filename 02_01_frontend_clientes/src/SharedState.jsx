import { useState, createContext, useEffect } from "react";
export const Context = createContext();

/*Componente que se comparte en toda la aplicación. 
Hacemos un get de todos los coches para compartir en todos los componentes
*/
export function ContextProvider({ children }) {

    const [sharedState, setSharedState] = useState(
        []
    );


    const actions = {
        setState: setSharedState,
    }

    const [sharedContext, setSharedContext] = useState({
        state: sharedState,
        actions
    })

    useEffect(
        () => {
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