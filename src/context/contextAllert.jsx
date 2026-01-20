import { createContext, useState, useEffect } from "react";

export const AllertContext = createContext();

export const AllertContextProvider = ({children}) => {
  const [allertType, setAllertType] = useState(null);
  const [openAllert, setOpenAllert] = useState(false);
  const [openAllertValue, setOpenAllertValue] = useState(null);  

  useEffect(() => {
    if (openAllert) {
      const timer = setTimeout(() => {
        setOpenAllert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [openAllert]);

    return (
        <AllertContext.Provider value={{
            allertType,
            setAllertType,
             openAllert,
            setOpenAllert,
            openAllertValue,
            setOpenAllertValue
        }}>
            {children}
        </AllertContext.Provider>
    );
};
export default AllertContext;