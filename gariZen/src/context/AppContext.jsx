import React, { createContext, useState, useContext, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase'






export const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})

    const [ menu, setMenu ] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [ info, setInfo ] = useState([])
    const [ toggle1, setToggle1 ]  = useState(true)
    
    const auth = getAuth()

    function signUp(email, password) {
      return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut() {
      return signOut(auth)
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })
      return () => {
        unsubscribe()
      }
    })

    
    
  return (
    <AppContext.Provider value={{ menu, setMenu, toggle, setToggle, info, setInfo, toggle1, setToggle1, signUp, logIn, logOut, user}}>
        {children}
    </AppContext.Provider>
  )
}

export function appFunc() {
    return useContext(AppContext)
}

export default AppContextProvider