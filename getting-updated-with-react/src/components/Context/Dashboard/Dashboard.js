import { useContext } from "react"
import { LoginContext } from "../Login/LoginContext"
import { LoginContextProvider } from "../Login/LoginContextProvider"

export const Dashboard = () => {

    const { userInfo } = useContext(LoginContext);
    const { firstName, lastName } = userInfo;

    return (
        <LoginContextProvider>
            <div className="App">
                <label for="fname">First name: {firstName} </label><br/>
                <label for="lname">Last name: {lastName} </label>
            </div>
        </LoginContextProvider>
    )
}