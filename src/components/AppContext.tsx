import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface BankUser {
  login: boolean;
  email: string;
  password: string;
  name: string;
}
interface IAppContext {
    user: Omit<BankUser, 'id' | 'login'> | undefined | null,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ user, setUser ] = useState<Omit<BankUser, 'id' | 'login'> | undefined | null>()

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login, email, name, password } = JSON.parse(storage) as BankUser
        setIsLoggedIn(login)
        setUser({email, name, password})
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
