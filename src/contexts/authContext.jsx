import { useState, createContext } from "react"

const authContext = createContext()

const AuthProvider = ({ children }) => {
    let defaulIsAuth = false
    const auth = JSON.parse(localStorage.getItem('tasksave_isAuth'))
    const token = JSON.parse(localStorage.getItem('token'))

    if(token && auth) defaulIsAuth = true
    else {
        localStorage.setItem('tasksave_isAuth', false)
        defaulIsAuth = false
    }

    const[isAuth, setIsAuth] = useState(defaulIsAuth)

    const signIn = cb => {
        setIsAuth(true)
        localStorage.setItem('isAuth', true)
        setTimeout(cb, 100)
    }
    
    const logOut = cb => {
        setIsAuth(false)
        localStorage.setItem('isAuth', false)
        setTimeout(cb, 100)
    }

    return (
        <authContext.Provider value={{ isAuth, signIn, logOut}}>
            { children }
        </authContext.Provider>
    )
}

export { authContext, AuthProvider }