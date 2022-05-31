import { useContext } from "react"
import { LoginContext } from "../context/Login_Context"

const Signup = () => {

    const {logInState} = useContext(LoginContext)
    console.log(logInState)
    return (
        <>
            <h1>Signup</h1>
        </>
    )
}

export default Signup