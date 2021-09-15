import { useState } from "react"
import { LoginContext } from "./LoginContext";

export const LoginContextProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});

    return (
        <LoginContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </LoginContext.Provider>
    )
}