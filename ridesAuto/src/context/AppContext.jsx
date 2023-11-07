import React, { createContext, useState, useContext } from 'react'

export const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const [ menu, setMenu ] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [ info, setInfo ] = useState([])
  return (
    <AppContext.Provider value={{ menu, setMenu, toggle, setToggle, info, setInfo }}>
        {children}
    </AppContext.Provider>
  )
}

export function appFunc() {
    return useContext(AppContext)
}

export default AppContextProvider