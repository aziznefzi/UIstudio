import {createContext, useState} from 'react'

export const languechButtonContext = createContext()

export const LanguechButtonContextProvider = ({children}) => {
    const [languech, setLanguech] = useState(localStorage.getItem('languech') || 'en')
    return (
        <languechButtonContext.Provider value={{languech, setLanguech}}>
            {children}
        </languechButtonContext.Provider>
    )
}
