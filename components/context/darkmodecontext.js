import { createContext, startTransition, useEffect, useReducer } from "react";
const LIGHT = "light"
const DARK = 'dark'
const INITIAL_STATE = {
    mode:  DARK,
}

// to copu past in the other files

///

export const DarkmodContext = createContext(INITIAL_STATE)

const darkmodreducer = (state, action) => {
    const toggledmode = state.mode === DARK ? LIGHT : DARK 
    localStorage.setItem("mode",toggledmode)
            return { mode: toggledmode }
}




export const DarkmodecontextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(darkmodreducer, INITIAL_STATE)

   
useEffect(()=>{
    if(   localStorage.getItem('mode') && state.mode != localStorage.getItem('mode')){
        
        dispatch()
    }
},[])
useEffect(() => {
    localStorage.setItem('mode', state.mode)
           
        }, [state.mode])
    return (
        <DarkmodContext.Provider value={{
            darkmodOn : state.mode === DARK ? true : false, 
            setDarkmod : dispatch
        }}>
            {children}
        </DarkmodContext.Provider>

    )
}