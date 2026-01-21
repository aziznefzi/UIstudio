import { createContext, useState } from "react";

export const ThemeButonContext = createContext();

export const ThemeButonContextProvider = ({children}) => {
    const [WebsiteTheme, setWebsiteTheme] = useState(localStorage.getItem('theme') || 'light')
    return (
        <ThemeButonContext.Provider value={{WebsiteTheme, setWebsiteTheme}}>
            {children}
        </ThemeButonContext.Provider>
    )
}