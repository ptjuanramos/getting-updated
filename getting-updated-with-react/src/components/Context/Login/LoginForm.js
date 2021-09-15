import { useContext, useRef } from "react"
import { LoginContext } from "./LoginContext";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {

    const { setUserInfo } = useContext(LoginContext);

    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const history = useHistory();

    const OnSubmit = (_) => {
        setUserInfo({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        });

        history.push("/dashboard");
    }

    return (
        <div className="App">
            <form onSubmit={OnSubmit}>
                <label for="fname">First name:</label>
                <input ref={firstNameRef} type="text" name="fname" /><br/>
                <label for="lname">Last name:</label>
                <input ref={lastNameRef} type="text" name="lname" /><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}